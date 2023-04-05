import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantJoinRoutingModule } from './tenant-join-routing.module';
import { JoinComponent } from './components/join/join.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TenantJoinRoutingModule
  ]
})
export class TenantJoinModule { }
