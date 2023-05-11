import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialReceiptListComponent } from './material-receipt-list.component';

describe('MaterialReceiptListComponent', () => {
  let component: MaterialReceiptListComponent;
  let fixture: ComponentFixture<MaterialReceiptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialReceiptListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialReceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
