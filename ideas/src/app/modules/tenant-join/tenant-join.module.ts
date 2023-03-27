import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantJoinRoutingModule } from './tenant-join-routing.module';
import { JoinComponent } from './components/join/join.component';


@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    TenantJoinRoutingModule
  ]
})
export class TenantJoinModule { }
