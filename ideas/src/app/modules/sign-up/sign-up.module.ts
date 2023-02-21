import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { RegistrationCompleteComponent } from './components/registration-complete/registration-complete.component';
import { ContinueComponent } from './components/continue/continue.component';


@NgModule({
  declarations: [
    SignUpComponent,
    StepOneComponent,
    StepTwoComponent,
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
