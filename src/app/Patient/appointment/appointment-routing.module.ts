import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentPage } from './appointment.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentPage
  },
  {
    path: 'book-appointment',
    loadChildren: () => import('../book-new-appointment/book-new-appointment.module').then( m => m.BookNewAppointmentPageModule)
  },
  {
    path: 'view-appointment',
    loadChildren: () => import('../view-appointment/view-appointment.module').then( m => m.ViewAppointmentPageModule)
  },
  {
    path: 'book-appointment',
    loadChildren: () => import('../book-new-appointment/book-new-appointment.module').then( m => m.BookNewAppointmentPageModule)
  },
  {
    path: 'view-appointment',
    loadChildren: () => import('../view-appointment/view-appointment.module').then( m => m.ViewAppointmentPageModule)
  },
  {
    path: 'book-new-appointment',
    loadChildren: () => import('../book-new-appointment/book-new-appointment.module').then( m => m.BookNewAppointmentPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentPageRoutingModule {}
