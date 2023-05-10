import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
