import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedrefillPage } from './medrefill.page';

const routes: Routes = [
  {
    path: '',
    component: MedrefillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedrefillPageRoutingModule {}
