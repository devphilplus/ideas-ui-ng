import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantAdminRoutingModule } from './tenant-admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { RolesComponent } from './components/roles/roles.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MembersComponent,
    RolesComponent,
    OrganizationsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    TenantAdminRoutingModule
  ]
})
export class TenantAdminModule { }
