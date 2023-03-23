import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import { RolesComponent } from './components/roles/roles.component';

const routes: Routes = [
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAdminRoutingModule { }
