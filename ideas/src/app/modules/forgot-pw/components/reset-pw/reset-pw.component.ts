import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.scss']
})
export class ResetPwComponent implements OnInit {

  enabled = true;

  forgotPwForm = new FormGroup({
    passwords: new FormGroup({
      pw1: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      pw2: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }); 

  constructor() { }

  ngOnInit(): void {
  }

  get passwords() {
    return this.forgotPwForm.get("passwords");
  }

  get pw1() {
    return this.forgotPwForm.get("passwords.pw1");
  }

  get pw2() {
    return this.forgotPwForm.get("passwords.pw2");
  }

  complete() {
    console.log("ContinueComponent::complete()");
  }
}
