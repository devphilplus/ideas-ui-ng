import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { TenantListComponent } from './components/tenant-list/tenant-list.component';
import { MemberListComponent } from './components/member-list/member-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'list',
    component: TenantListComponent
  },
  {
    path: 'new',
    component: TenantComponent
  },
  {
    path: 'members/:tenant_slug',
    component: MemberListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }
