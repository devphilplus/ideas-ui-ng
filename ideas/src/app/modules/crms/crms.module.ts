import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmsRoutingModule } from './crms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CrmsRoutingModule
  ]
})
export class CrmsModule { }
