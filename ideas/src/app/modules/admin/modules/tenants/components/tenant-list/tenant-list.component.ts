import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { TenantService } from '../../services/tenant.service';
import { ApiResponse } from 'src/app/classes/api-response';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';
  
  constructor(
    private title: TitleService,
    private tenant_service: TenantService
  ) {
    this.title.set_title('Tenants');
  }

  ngOnInit(): void {
    console.log('TenantListComponent::ngOnInit()');
  }

  get_tenants() {
    console.log('TenantListComponent::get_tenants()');
    this.tenant_service.tenants_fetch().subscribe((r: ApiResponse) => {
      console.debug('TenantListComponent::get_tenants() [1]', r);
    });
  }
}
