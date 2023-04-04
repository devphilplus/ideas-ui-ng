import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeaveComponent } from './components/leave/leave.component';
import { PayrollListComponent } from './components/payroll-list/payroll-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    EmployeeListComponent,
    EmployeeComponent,
    PayrollComponent,
    AttendanceComponent,
    LeaveComponent,
    PayrollListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HrRoutingModule
  ]
})
export class HrModule { }
