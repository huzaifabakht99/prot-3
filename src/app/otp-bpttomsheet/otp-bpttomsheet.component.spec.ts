import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpBpttomsheetComponent } from './otp-bpttomsheet.component';

describe('OtpBpttomsheetComponent', () => {
  let component: OtpBpttomsheetComponent;
  let fixture: ComponentFixture<OtpBpttomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpBpttomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpBpttomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
