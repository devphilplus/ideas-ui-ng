import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { MembersService } from '../../services/members.service';
import { ApiResponse } from 'src/app/classes/api-response';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  constructor(
    private title: TitleService,
    private members_service: MembersService
  ) {
    this.title.set_title('Tenant Members');
  }

  ngOnInit(): void {
    this.fetch_members();
  }

  fetch_members(): void {
    this.members_service.fetch().subscribe((r: ApiResponse) => {
      console.log('MembersListComponent::fetch_members()');
    });
  }
}
