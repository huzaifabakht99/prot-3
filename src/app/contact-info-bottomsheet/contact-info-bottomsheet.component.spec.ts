import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoBottomsheetComponent } from './contact-info-bottomsheet.component';

describe('ContactInfoBottomsheetComponent', () => {
  let component: ContactInfoBottomsheetComponent;
  let fixture: ComponentFixture<ContactInfoBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoBottomsheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
