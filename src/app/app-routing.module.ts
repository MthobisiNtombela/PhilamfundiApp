import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Patient/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'health-records',
    loadChildren: () => import('./Patient/health-records/health-records.module').then( m => m.HealthRecordsPageModule)
  },
  {
    path: 'med-collection',
    loadChildren: () => import('./Patient/med-collection/med-collection.module').then( m => m.MedCollectionPageModule)
  },
  {
    path: 'philamfundi-ai',
    loadChildren: () => import('./Patient/philamfundi-ai/philamfundi-ai.module').then( m => m.PhilamfundiAIPageModule)
  },
  {
    path: 'advertisement',
    loadChildren: () => import('./Patient/advertisement/advertisement.module').then( m => m.AdvertisementPageModule)
  },
  {
    path: 'medrefill',
    loadChildren: () => import('./Patient/medrefill/medrefill.module').then( m => m.MedrefillPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./Patient/appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./Patient/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./Patient/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'bookNewAppointment',
    loadChildren: () => import('./Patient/book-new-appointment/book-new-appointment.module').then( m => m.BookNewAppointmentPageModule)
  },
  {
    path: 'view-appointment',
    loadChildren: () => import('./Patient/view-appointment/view-appointment.module').then( m => m.ViewAppointmentPageModule)
  },
  /*{
    path: 'appointment-list',
    loadChildren: () => import('./pages/appointment-list/appointment-list.module').then( m => m.appointment-listPageModule)
    C:\Users\CC\PhilamfundiApp\src\app\Patient\appointment\book-appointment
  },
  {
    path: 'new-appointments',
    loadChildren: () => import('./pages/new-appointments/new-appointments').then( m => m.LandingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.ResetPasswordPageModule)
  },
*/





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
