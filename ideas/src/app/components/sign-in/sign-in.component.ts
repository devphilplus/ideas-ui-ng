import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/classes/api-response';
import { UserService } from 'src/app/services/user.service';
import { TitleService } from 'src/app/services/title.service';
import { Message, MessageService, MessageType } from 'src/app/services/message.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  enabled = true;

  message = '';
  message_type = 'info';

  signinForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    pw: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private title: TitleService,
    private router: Router,
    private user_service: UserService,
    private msg_service: MessageService
  ) {
    this.title.set_title('Sign In');

    this.msg_service.message$.subscribe((r: Message) => {
      console.log(r);
      this.message = r.text;
      this.message_type = r.type == MessageType.Info ? 'info' : 'error';
    });
  }

  ngOnInit(): void {
  }

  get pw() {
    return this.signinForm.get('pw');
  }

  signin(): void {
    console.log('SignInComponent::signin()');

    this.enabled = false;
    this.user_service.signin(
      this.signinForm.get('email')?.value || '',
      this.signinForm.get('pw')?.value || ''
    );
  }
}
