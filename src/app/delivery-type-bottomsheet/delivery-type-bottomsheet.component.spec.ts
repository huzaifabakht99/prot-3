import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTypeBottomsheetComponent } from './delivery-type-bottomsheet.component';

describe('DeliveryTypeBottomsheetComponent', () => {
  let component: DeliveryTypeBottomsheetComponent;
  let fixture: ComponentFixture<DeliveryTypeBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryTypeBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryTypeBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
