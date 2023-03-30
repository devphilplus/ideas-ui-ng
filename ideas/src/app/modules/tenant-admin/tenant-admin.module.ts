import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantAdminRoutingModule } from './tenant-admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { RolesComponent } from './components/roles/roles.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MembersListComponent } from './components/members-list/members-list.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MembersComponent,
    RolesComponent,
    OrganizationsComponent,
    SettingsComponent,
    MembersListComponent,
    RolesListComponent,
    OrganizationListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TenantAdminRoutingModule
  ]
})
export class TenantAdminModule { }
