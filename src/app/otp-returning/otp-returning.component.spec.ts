import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpReturningComponent } from './otp-returning.component';

describe('OtpReturningComponent', () => {
  let component: OtpReturningComponent;
  let fixture: ComponentFixture<OtpReturningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpReturningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpReturningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
