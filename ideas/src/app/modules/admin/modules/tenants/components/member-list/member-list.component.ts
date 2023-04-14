import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
import { MembersService } from '../../services/members.service';
import { ApiResponse } from 'src/app/classes/api-response';
import { MessageService, MessageType } from 'src/app/services/message.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(
    private title: TitleService,
    private route: ActivatedRoute,
    private members_service: MembersService,
    private msg_service: MessageService
  ) {
    this.title.set_title('Tenant Members');
  }

  ngOnInit(): void {
    console.info("MemberListComponent::ngOnInit()");

    let tenant_slug = this.route.snapshot.paramMap.get('tenant_slug') || '';
    this.get_members(tenant_slug);
  }

  get_members(tenant_slug: string): void {
    this.members_service.members(tenant_slug).subscribe((r: ApiResponse) => {
      if (r.success) {
        if (r.data && r.data.members) {
          let members = (r.data.members as Array<User>);
          console.debug('members', members);
        }
      } else {
        this.msg_service.send(r.message, MessageType.Error);
      }
    });
  }
}
