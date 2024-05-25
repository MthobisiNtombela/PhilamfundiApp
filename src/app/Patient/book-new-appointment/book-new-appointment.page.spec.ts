import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookNewAppointmentPage } from './book-new-appointment.page';

describe('BookNewAppointmentPage', () => {
  let component: BookNewAppointmentPage;
  let fixture: ComponentFixture<BookNewAppointmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
