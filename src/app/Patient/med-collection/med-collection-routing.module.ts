import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedCollectionPage } from './med-collection.page';

const routes: Routes = [
  {
    path: '',
    component: MedCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedCollectionPageRoutingModule {}
