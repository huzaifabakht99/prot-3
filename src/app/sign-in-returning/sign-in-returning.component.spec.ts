import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInReturningComponent } from './sign-in-returning.component';

describe('SignInReturningComponent', () => {
  let component: SignInReturningComponent;
  let fixture: ComponentFixture<SignInReturningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInReturningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInReturningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
