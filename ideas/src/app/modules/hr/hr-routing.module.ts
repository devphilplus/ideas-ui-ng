import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PayrollListComponent } from './components/payroll-list/payroll-list.component';
import { PayrollComponent } from './components/payroll/payroll.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'employees',
        component: EmployeeListComponent
      },
      {
        path: 'employees/new',
        component: EmployeeComponent
      },
      {
        path: 'payroll',
        component: PayrollListComponent
      },
      {
        path: 'payroll/new',
        component: PayrollComponent
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
export class HrRoutingModule { }
