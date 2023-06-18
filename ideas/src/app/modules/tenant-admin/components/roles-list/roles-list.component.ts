import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SelectionService } from 'src/app/services/selection.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  rolesForm = new FormGroup({
  });



  constructor(
    private title: TitleService,
    private selection_service: SelectionService,
    private route: ActivatedRoute
  ) {
    this.title.set_title('Roles');
  }

  ngOnInit(): void {
    
  }

  submit(): void {
    console.log('RolesListComponent::submit()');
  }

  add_permissions(): void {
    console.log('RolesComponent::add_permissions()');
    this.selection_service.select();
  }
}
