import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectionService } from 'src/app/services/selection.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  rolesForm = new FormGroup({
  });

  constructor(
    private title: TitleService,
    private selection_service: SelectionService
  ) {
    this.title.set_title('Roles');
  }

  submit(): void {
    console.log('RolesListComponent::submit()');
  }

  add_permissions(): void {
    console.log('RolesComponent::add_permissions()');
    this.selection_service.select();
  }
}
