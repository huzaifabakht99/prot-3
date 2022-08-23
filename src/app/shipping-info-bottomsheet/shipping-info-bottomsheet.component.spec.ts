import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInfoBottomsheetComponent } from './shipping-info-bottomsheet.component';

describe('ShippingInfoBottomsheetComponent', () => {
  let component: ShippingInfoBottomsheetComponent;
  let fixture: ComponentFixture<ShippingInfoBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingInfoBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingInfoBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
