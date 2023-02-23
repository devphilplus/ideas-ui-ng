import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  enabled = true;

  signupForm = new FormGroup({
    emails: new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  });

  constructor(
    private title: TitleService,
    private registration: SignUpService
  ) {
    this.title.set_title('Sign Up');
  }

  ngOnInit(): void {
  }

  signup(): void {
    console.log('SignUpComponent::signup()');
    this.enabled = false;
    this.registration.register(
      this.signupForm.get('emails.email')?.value || ''
    ).subscribe(r => {
      console.debug(r);
      this.enabled = true;
    });
  }
}
