import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  signupForm = new FormGroup({
    emails: new FormGroup({
      email1: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    }),
    passwords: new FormGroup({
      pw1: new FormControl('', [
        Validators.required
      ]),
      pw2: new FormControl('', [
        Validators.required
      ])
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

}
