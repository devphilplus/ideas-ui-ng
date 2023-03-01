import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForgotPwRoutingModule } from './forgot-pw-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ResetPwComponent } from './components/reset-pw/reset-pw.component';


@NgModule({
  declarations: [
    HomeComponent,
    ResetPwComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ForgotPwRoutingModule
  ]
})
export class ForgotPwModule { }
