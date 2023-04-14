import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { TenantService } from '../../services/tenant.service';
import { ApiResponse } from 'src/app/classes/api-response';
import { Tenant } from '../../classes/tenant';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MessageService, MessageType } from 'src/app/services/message.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  // // tenants: Array<Tenant> = new Array();
  // tenants: Tenant[] = [
  //   new Tenant('1', true, 'tenant 1', 'tenant_1'),
  //   new Tenant('2', true, 'tenant 2', 'tenant_2'),
  //   new Tenant('3', true, 'tenant 3', 'tenant_3')
  // ];

  tenant_row = new FormGroup({
    tenant_id: new FormControl('', []),
    active: new FormControl('', []),
    name: new FormControl('', []),
    slug: new FormControl('', [])
  });

  tenantsForm = new FormGroup({
    tenants: new FormArray([])
  });
  
  constructor(
    private title: TitleService,
    private tenant_service: TenantService,
    private msg_service: MessageService
  ) {
    this.title.set_title('Tenants');
  }

  ngOnInit(): void {
    console.log('TenantListComponent::ngOnInit()');

    // this.add_tenant_row();
    // this.add_tenant_row();
    // this.add_tenant_row();

    this.get_tenants();
  }

  get tenants() {
    // console.debug(this.tenantsForm.get('tenants') as FormArray);
    return this.tenantsForm.get('tenants') as FormArray;
  }

  add_tenant_row(tenant: Tenant) {

    let row = new FormGroup({
      tenant_id: new FormControl(tenant.id, []),
      active: new FormControl(tenant.active, []),
      name: new FormControl(tenant.name, []),
      slug: new FormControl(tenant.slug, [])
    });

    (this.tenantsForm.get('tenants') as FormArray).push(row);
  }

  get_tenants() {
    console.log('TenantListComponent::get_tenants()');
    this.tenant_service.tenants_fetch().subscribe((r: ApiResponse) => {
      console.debug('TenantListComponent::get_tenants() [1]', r);
      if (r.success) {
        if (r.data && r.data.tenants) {
          let tenants = (r.data.tenants as Array<Tenant>);
          tenants.forEach(t => {
            this.add_tenant_row(t);
          });
        } else {
          console.error("no data");
        }
      } else {
        this.msg_service.send(r.message, MessageType.Error);
      }
    });
  }

  submit() {
    console.log('TenantListComponent::submit()');
    console.debug(this.tenantsForm.value);
  }
}
