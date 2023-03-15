import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Message, MessageService, MessageType } from 'src/app/services/message.service';
import { TitleService } from 'src/app/services/title.service';
import { patternValidator } from 'src/app/classes/validators/pattern-validator';
import { matchValidator } from 'src/app/classes/validators/match-validator';
import { ProfileService } from '../../services/profile.service';
import { ApiResponse } from 'src/app/classes/api-response';

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
    private msg_service: MessageService,
    private profile_service: ProfileService
  ) {
    this.title.set_title("Password");

    this.msg_service.message$.subscribe((r: Message) => {
      console.debug(r);
      // only show errors
      if (r.type == MessageType.Error) {
        this.message = r.text;
        this.message_type = "error";
      }
    });
  }

  ngOnInit(): void {
  }

  get pw1() {
    return this.passwordForm.get('pw1');
  }

  get pw2() {
    return this.passwordForm.get('pw2');
  }
  
  get passwords() {
    return this.passwordForm;
  }

  change_password(): void {
    console.log("PasswordComponent::change_password()");

    let pw = this.passwordForm.get('pw1')?.value || '';

    this.enabled = false;
    this.profile_service.change_password(pw).subscribe((r: ApiResponse) => {
      console.log(r);
      this.msg_service.send(r.message, r.success ? MessageType.Info : MessageType.Error);
    });
    
  }
}
