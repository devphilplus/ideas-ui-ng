import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialReceiptRoutingModule } from './material-receipt-routing.module';
import { MaterialReceiptComponent } from './components/material-receipt/material-receipt.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MaterialReceiptListComponent } from './components/material-receipt-list/material-receipt-list.component';


@NgModule({
  declarations: [
    MaterialReceiptComponent,
    MaterialReceiptListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialReceiptRoutingModule
  ]
})
export class MaterialReceiptModule { }
