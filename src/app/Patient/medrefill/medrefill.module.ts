import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedrefillPageRoutingModule } from './medrefill-routing.module';

import { MedrefillPage } from './medrefill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedrefillPageRoutingModule
  ],
  declarations: [MedrefillPage]
})
export class MedrefillPageModule {}
