import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilamfundiAIPage } from './philamfundi-ai.page';

const routes: Routes = [
  {
    path: '',
    component: PhilamfundiAIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhilamfundiAIPageRoutingModule {}
