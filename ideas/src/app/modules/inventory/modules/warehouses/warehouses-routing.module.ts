import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
  {
    path: 'new',
    component: WarehouseComponent
  },
  {
    path: 'warehouse/:warehouse_id',
    component: WarehouseComponent
  },
  {
    path: 'warehouse/:warehouse_id/location/new',
    component: LocationComponent
  },
  {
    path: '',
    component: WarehouseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousesRoutingModule { }
