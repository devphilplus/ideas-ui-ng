import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent implements OnInit {

  signupForm = new FormGroup({
    emails: new FormGroup({
      email: new FormControl('', [
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

  complete() {
    console.log("ContinueComponent::complete()");
  }
}
