import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    emails: new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  });

  constructor(
    private registration: SignUpService
  ) { }

  ngOnInit(): void {
  }

  signup(): void {
    console.log('SignUpComponent::signup()');
    this.registration.register(
      this.signupForm.get('emails.email')?.value || ''
    ).subscribe(r => {
      console.debug(r);
    });
  }
}
