import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedCollectionPageRoutingModule } from './med-collection-routing.module';

import { MedCollectionPage } from './med-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedCollectionPageRoutingModule
  ],
  declarations: [MedCollectionPage]
})
export class MedCollectionPageModule {}
