import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/classes/api-response';
import { AuthService } from 'src/app/services/auth.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  enabled = true;

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
    private auth_service: AuthService
  ) {
    this.title.set_title('Sign In');
  }

  ngOnInit(): void {
  }

  get pw() {
    return this.signinForm.get('pw');
  }

  signin(): void {
    console.log('SignInComponent::signin()');

    this.enabled = false;
    this.auth_service.signin(
      this.signinForm.get('email')?.value || '',
      this.signinForm.get('pw')?.value || ''
    );
  }
}
