import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookNewAppointmentPage } from './book-new-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: BookNewAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookNewAppointmentPageRoutingModule {}
