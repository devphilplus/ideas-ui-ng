import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { WarehousesService } from '../../services/warehouses.service';
import { ApiResponse } from 'src/app/classes/api-response';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  constructor(
    private title: TitleService,
    private warehouse_service: WarehousesService
  ) {
    this.title.set_title('Warehouses');
  }

  ngOnInit(): void {
    this.get_warehouses();
  }

  get_warehouses(): void {
    this.warehouse_service.get_warehouses().subscribe((r: ApiResponse) => {
      console.debug(r);
    });
  }
}
