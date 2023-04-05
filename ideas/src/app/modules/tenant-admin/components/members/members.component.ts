import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  memberForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Member');
  }

  get email() {
    return this.memberForm.get('email');
  }

  submit(): void {
    console.log('MembersComponent::submit()');
  }
}
