import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningUserComponent } from './returning-user.component';

describe('ReturningUserComponent', () => {
  let component: ReturningUserComponent;
  let fixture: ComponentFixture<ReturningUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturningUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturningUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
