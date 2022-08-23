import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBottomsheetComponent } from './menu-bottomsheet.component';

describe('MenuBottomsheetComponent', () => {
  let component: MenuBottomsheetComponent;
  let fixture: ComponentFixture<MenuBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
