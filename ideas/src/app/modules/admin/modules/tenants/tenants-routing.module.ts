import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { TenantListComponent } from './components/tenant-list/tenant-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: TenantListComponent
      },
      {
        path: 'tenant',
        component: TenantComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }
