import { Component, OnInit } from '@angular/core';

interface Appointment {
  name: string;
  location: string;
  date: Date;
  time: string;
}

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.page.html',
  styleUrls: ['./view-appointment.page.scss'],
})
export class ViewAppointmentPage implements OnInit {
  appointments: Appointment[] = [
    { name: 'Rohit Sharma', location: 'Mumbai', date: new Date('2024-12-22T19:00:00'), time: '7:00 PM' },
    { name: 'Virat Kohli', location: 'New Mumbai', date: new Date('2024-12-22T19:30:00'), time: '7:30 PM' },
    { name: 'Suresh Raina', location: 'New Mumbai', date: new Date('2024-12-22T19:30:00'), time: '7:30 PM' },
    { name: 'Ankit Rao', location: 'Mumbai', date: new Date('2024-12-22T20:00:00'), time: '8:00 PM' },
    { name: 'Sachin Tendulkar', location: 'Mumbai', date: new Date('2024-12-22T19:30:00'), time: '7:30 PM' },
    { name: 'Aditya', location: 'New Mumbai', date: new Date('2024-12-22T20:30:00'), time: '8:30 PM' }
  ];
  filteredAppointments: Appointment[] = [];

  ngOnInit() {
    this.filteredAppointments = this.appointments;
  }

  segmentChanged(event: any) {
    const segmentValue = event.detail.value;
    if (segmentValue === 'today') {
      const today = new Date().toISOString().split('T')[0];
      this.filteredAppointments = this.appointments.filter(app => app.date.toISOString().split('T')[0] === today);
    } else {
      this.filteredAppointments = this.appointments;
    }
  }

  /*cancelAppointment(appointment: Appointment) {
    // Add your cancellation logic here
  }*/
  cancelAppointment(appointment: Appointment) {
    this.appointments = this.appointments.filter(appt => appt !== appointment);
    this.filteredAppointments = this.filteredAppointments.filter(appt => appt !== appointment);
  }

  rescheduleAppointment(appointment: Appointment) {
    // Add your rescheduling logic here
  }
}
