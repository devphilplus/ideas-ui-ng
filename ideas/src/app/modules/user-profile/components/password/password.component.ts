import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'src/app/services/message.service';
import { TitleService } from 'src/app/services/title.service';
import { patternValidator } from 'src/app/classes/validators/pattern-validator';
import { matchValidator } from 'src/app/classes/validators/match-validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  passwordForm = new FormGroup({
    pw1: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      patternValidator(new RegExp("[a-z]*[a-z]"), { lower: true }),
      patternValidator(new RegExp("[A-Z]*[A-Z]"), { upper: true }),
      patternValidator(new RegExp("[0-9]*[0-9]"), { numeric: true })
    ]),
    pw2: new FormControl('', [
      Validators.required
    ])
  }, {
    validators: [
      matchValidator("pw1", "pw2")
    ]
  });

  constructor(
    private title: TitleService,
    private msg_service: MessageService
  ) {
    this.title.set_title("Password");
  }

  ngOnInit(): void {
  }

  change_password(): void {
    console.log("PasswordComponent::change_password()");
  }
}
