import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAppointmentPage } from './view-appointment.page';

describe('ViewAppointmentPage', () => {
  let component: ViewAppointmentPage;
  let fixture: ComponentFixture<ViewAppointmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
