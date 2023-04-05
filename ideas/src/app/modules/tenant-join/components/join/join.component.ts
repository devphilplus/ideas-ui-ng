import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  tenantJoinForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Join Tenant');
  }

  submit(): void {
    console.log('JoinComponent::submit()');
  }
}
