import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PasswordComponent } from './components/password/password.component';


@NgModule({
  declarations: [
    HomeComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
