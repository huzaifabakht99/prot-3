import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCheckoutReturningComponent } from './main-checkout-returning.component';

describe('MainCheckoutReturningComponent', () => {
  let component: MainCheckoutReturningComponent;
  let fixture: ComponentFixture<MainCheckoutReturningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCheckoutReturningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCheckoutReturningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
