import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhilamfundiAIPageRoutingModule } from './philamfundi-ai-routing.module';

import { PhilamfundiAIPage } from './philamfundi-ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhilamfundiAIPageRoutingModule
  ],
  declarations: [PhilamfundiAIPage]
})
export class PhilamfundiAIPageModule {}
