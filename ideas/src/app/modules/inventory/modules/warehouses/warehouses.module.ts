import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';


@NgModule({
  declarations: [
    WarehouseComponent,
    WarehouseListComponent
  ],
  imports: [
    CommonModule,
    WarehousesRoutingModule
  ]
})
export class WarehousesModule { }
