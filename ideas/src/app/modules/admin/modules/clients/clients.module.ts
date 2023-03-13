import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { ClientListComponent } from './components/client-list/client-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClientComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
