import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-new-appointment',
  templateUrl: './book-new-appointment.page.html',
  styleUrls: ['./book-new-appointment.page.scss'],
})
export class BookNewAppointmentPage implements OnInit {
  appointmentReason: string | undefined;
  selectedDate: string | undefined;
  selectedTimeSlot: string | undefined;
  username: string = 'John Doe'; // This should be dynamically fetched in a real application
  doctorName: string = 'Dr. Smith'; // This should be dynamically fetched in a real application
  showConfirmation: boolean = false;
  isDatePickerOpen: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  async bookAppointment() {
    if (this.appointmentReason && this.selectedDate && this.selectedTimeSlot) {
      const appointmentData = {
        name: this.username,
        location: 'New Location', // Add your logic to fetch location
        date: new Date(this.selectedDate),
        time: this.selectedTimeSlot,
        done: false,
      };

      const alert = await this.alertController.create({
        header: 'Confirmation',
        message: `Are you sure you want to book the appointment for ${this.selectedDate} at ${this.selectedTimeSlot}?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/view-appointment'], {
                state: { appointmentData }
              });
            }
          }
        ]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter a reason for the appointment, select a date, and choose a time slot.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  openDatePicker() {
    this.isDatePickerOpen = true;
  }

  closeDatePicker() {
    this.isDatePickerOpen = false;
  }

  async selectDate() {
    const alert = await this.alertController.create({
      header: 'Select Date',
      inputs: [
        {
          name: 'date',
          type: 'date',
          value: this.selectedDate
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.selectedDate = data.date;
          }
        }
      ]
    });

    await alert.present();
  }
}
