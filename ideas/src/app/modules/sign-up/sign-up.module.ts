import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RegistrationCompleteComponent } from './components/registration-complete/registration-complete.component';
import { ContinueComponent } from './components/continue/continue.component';


@NgModule({
  declarations: [
    SignUpComponent,
    RegistrationCompleteComponent,
    ContinueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
