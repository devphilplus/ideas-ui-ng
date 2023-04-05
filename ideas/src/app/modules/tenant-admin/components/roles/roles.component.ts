import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  roleForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Role');
  }

  submit(): void {
    console.log('RolesComponent::submit()');
  }
}
