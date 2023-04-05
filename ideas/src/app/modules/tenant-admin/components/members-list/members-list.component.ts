import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent {

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Tenant Members');
  }
}
