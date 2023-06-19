import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SelectionService } from 'src/app/services/selection.service';
import { TitleService } from 'src/app/services/title.service';
import { RolesService } from '../../services/roles.service';
import { SelectionClient } from 'src/app/classes/selection/selection-client';
import { Item } from 'src/app/classes/selection/item';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit, SelectionClient {

  enabled = true;
  message = '';
  message_type = 'info';

  rolesForm = new FormGroup({
  });



  constructor(
    private title: TitleService,
    private roles_service: RolesService,
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

  selected(items: Item[]): void {
    console.log('RolesListComponent::selected()');
  }

  add_permissions(): void {
    console.log('RolesComponent::add_permissions()');
    this.selection_service.select(
      this.roles_service,
      this
    );
  }
}
