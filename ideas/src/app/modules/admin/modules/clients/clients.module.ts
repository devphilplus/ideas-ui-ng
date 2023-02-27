import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
