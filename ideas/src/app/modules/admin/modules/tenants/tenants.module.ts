import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsRoutingModule } from './tenants-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { TenantListComponent } from './components/tenant-list/tenant-list.component';
import { MemberListComponent } from './components/member-list/member-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TenantComponent,
    TenantListComponent,
    MemberListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TenantsRoutingModule
  ]
})
export class TenantsModule { }
