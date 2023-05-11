import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialReceiptComponent } from './material-receipt.component';

describe('MaterialReceiptComponent', () => {
  let component: MaterialReceiptComponent;
  let fixture: ComponentFixture<MaterialReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
