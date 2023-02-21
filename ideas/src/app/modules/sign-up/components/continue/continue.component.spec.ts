import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueComponent } from './continue.component';

describe('ContinueComponent', () => {
  let component: ContinueComponent;
  let fixture: ComponentFixture<ContinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
