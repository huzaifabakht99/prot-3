import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturingMenuBarComponent } from './returing-menu-bar.component';

describe('ReturingMenuBarComponent', () => {
  let component: ReturingMenuBarComponent;
  let fixture: ComponentFixture<ReturingMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturingMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturingMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
