import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  signupForm = new FormGroup({
    emails: new FormGroup({
      email1: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  signup(): void {
    console.log('SignUpComponent::signup()');
  }

}
