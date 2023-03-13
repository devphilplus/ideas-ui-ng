import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientJoinRoutingModule } from './client-join-routing.module';
import { JoinComponent } from './components/join/join.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClientJoinRoutingModule
  ]
})
export class ClientJoinModule { }
