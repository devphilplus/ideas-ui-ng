import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialReceiptComponent } from './components/material-receipt/material-receipt.component';
import { MaterialReceiptListComponent } from './components/material-receipt-list/material-receipt-list.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialReceiptListComponent
  },
  {
    path: 'new',
    component: MaterialReceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialReceiptRoutingModule { }
