import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { TenantService } from '../../services/tenant.service';
import { ApiResponse } from 'src/app/classes/api-response';
import { Tenant } from '../../classes/tenant';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
    active: new FormControl('', []),
    name: new FormControl('', []),
    slug: new FormControl('', [])
  });

  tenantsForm = new FormGroup({
    tenants: new FormArray([])
  });
  
  constructor(
    private title: TitleService,
    private tenant_service: TenantService
  ) {
    this.title.set_title('Tenants');
  }

  ngOnInit(): void {
    console.log('TenantListComponent::ngOnInit()');

    // (this.tenantsForm.get('tenants') as FormArray).push(
    //   new FormGroup({
    //     name: new FormControl('', [])
    //   })
    // )
    this.add_tenant_row();
    this.add_tenant_row();
    this.add_tenant_row();
  }

  get tenants() {
    // console.debug(this.tenantsForm.get('tenants') as FormArray);
    return this.tenantsForm.get('tenants') as FormArray;
  }

  add_tenant_row() {
    (this.tenantsForm.get('tenants') as FormArray).push(this.tenant_row);
  }

  get_tenants() {
    console.log('TenantListComponent::get_tenants()');
    this.tenant_service.tenants_fetch().subscribe((r: ApiResponse) => {
      console.debug('TenantListComponent::get_tenants() [1]', r);
    });
  }

  submit() {
    console.log('TenantListComponent::submit()');
    console.debug(this.tenantsForm);
  }
}
