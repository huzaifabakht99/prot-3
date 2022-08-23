import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuBarComponent } from './order-menu-bar.component';

describe('OrderMenuBarComponent', () => {
  let component: OrderMenuBarComponent;
  let fixture: ComponentFixture<OrderMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
