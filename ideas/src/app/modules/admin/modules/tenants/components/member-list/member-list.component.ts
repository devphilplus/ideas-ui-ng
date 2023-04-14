import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(
    private title: TitleService,
    private route: ActivatedRoute
  ) {
    this.title.set_title('Tenant Members');
  }

  ngOnInit(): void {
    console.info("MemberListComponent::ngOnInit()");

    let tenant_slug = this.route.snapshot.paramMap.get('tenant_slug');
    console.log(tenant_slug);
  }
}
