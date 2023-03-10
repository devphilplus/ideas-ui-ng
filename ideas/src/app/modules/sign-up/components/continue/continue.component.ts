import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TitleService } from 'src/app/services/title.service';
import { SignUpService } from '../../services/sign-up.service';
import { ApiResponse } from 'src/app/classes/api-response';
import { patternValidator } from 'src/app/classes/validators/pattern-validator';
import { matchValidator } from 'src/app/classes/validators/match-validator';
import { Message, MessageService, MessageType } from 'src/app/services/message.service';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  signupForm = new FormGroup({
    token: new FormControl('', []),
    emails: new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    }),
    passwords: new FormGroup({
      pw1: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        patternValidator(new RegExp("[a-z]*[a-z]"), { lower: true }),
        patternValidator(new RegExp("[A-Z]*[A-Z]"), { upper: true }),
        patternValidator(new RegExp("[0-9]*[0-9]"), { numeric: true })
      ]),
      pw2: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }, {
      validators: [
        matchValidator("pw1", "pw2")
      ]
    })
  });

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private router: Router,
    private signup_service: SignUpService,
    private msg_service: MessageService
  ) { 
    this.title.set_title('Sign Up');
  }

  ngOnInit(): void {
    this.enabled = false;
    
    this.msg_service.message$.subscribe((r: Message) => {
      console.debug(r);
      // only show errors
      if (r.type == MessageType.Error) {
        this.message = r.text;
        this.message_type = "error";
      }
    });

    let token = this.route.snapshot.paramMap.get('token');
    if (token != '') {
      this.signup_service.get_signup_details(token || '').subscribe((r: ApiResponse) => {
        if (r.success) {
          let d = (r.data as { info: { created: Date, email: string, token: string } }).info;
          this.signupForm.get('token')?.setValue(d.token);
          this.signupForm.get('emails.email')?.setValue(d.email);
          console.debug(d);
        } else {
          console.error(r);
        }

        this.enabled = true;
      });
    }
  }

  get passwords() {
    return this.signupForm.get("passwords");
  }

  get pw1() {
    return this.signupForm.get("passwords.pw1");
  }

  get pw2() {
    return this.signupForm.get("passwords.pw2");
  }



  complete() {
    console.log("ContinueComponent::complete()");
    this.enabled = false;

    this.signup_service.register_complete(
      this.signupForm.get('token')?.value || '',
      this.signupForm.get('passwords.pw1')?.value || ''
    ).subscribe((r: ApiResponse) => {
      if (r.success) {
        // redirect to sign-in page
        this.message = "Successfully signed up. Redirecting to Sign In page ...";
        setTimeout(() => {
          this.router.navigate(['sign-in']);
        }, 3000);
      } else {
        console.error(r);
        this.enabled = true;
      }
    });
  }
}
