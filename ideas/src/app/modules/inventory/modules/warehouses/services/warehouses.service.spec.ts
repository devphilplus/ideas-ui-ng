import { TestBed } from '@angular/core/testing';

import { WarehousesService } from './warehouses.service';

describe('WarehousesService', () => {
  let service: WarehousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
