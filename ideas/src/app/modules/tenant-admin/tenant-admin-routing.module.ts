import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { RolesComponent } from './components/roles/roles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'members/list',
        component: MembersListComponent
      },
      {
        path: 'members/new',
        component: MembersComponent
      },
      {
        path: 'roles/list',
        component: RolesListComponent
      },
      {
        path: 'roles/new',
        component: RolesComponent
      },
      {
        path: 'orgs/list',
        component: OrganizationListComponent
      },
      {
        path: '**',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantAdminRoutingModule { }
