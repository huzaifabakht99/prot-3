import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodBottomsheetComponent } from './payment-method-bottomsheet.component';

describe('PaymentMethodBottomsheetComponent', () => {
  let component: PaymentMethodBottomsheetComponent;
  let fixture: ComponentFixture<PaymentMethodBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
