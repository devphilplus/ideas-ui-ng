import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { WarehouseListComponent } from './modules/warehouses/components/warehouse-list/warehouse-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'warehouses',
        // component: WarehouseListComponent
        loadChildren: () => import('./modules/warehouses/warehouses.module').then(m => m.WarehousesModule) 
      },
      {
        path: 'items',
        loadChildren: () => import('./modules/items/items.module').then(m => m.ItemsModule)
      },
      {
        path: 'material-receipts',
        loadChildren: () => import('./modules/material-receipt/material-receipt.module').then(m => m.MaterialReceiptModule)
      },
      {
        path: '**',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
