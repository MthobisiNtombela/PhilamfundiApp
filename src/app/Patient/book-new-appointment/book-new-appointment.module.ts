import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookNewAppointmentPageRoutingModule } from './book-new-appointment-routing.module';

import { BookNewAppointmentPage } from './book-new-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookNewAppointmentPageRoutingModule
  ],
  declarations: [BookNewAppointmentPage]
})
export class BookNewAppointmentPageModule {}
