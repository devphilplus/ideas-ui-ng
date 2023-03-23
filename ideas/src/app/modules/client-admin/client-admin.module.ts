import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAdminRoutingModule } from './client-admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { RolesComponent } from './components/roles/roles.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MembersComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    ClientAdminRoutingModule
  ]
})
export class ClientAdminModule { }
