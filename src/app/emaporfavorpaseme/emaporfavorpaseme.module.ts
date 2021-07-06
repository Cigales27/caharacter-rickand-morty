import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmaporfavorpasemePageRoutingModule } from './emaporfavorpaseme-routing.module';

import { EmaporfavorpasemePage } from './emaporfavorpaseme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmaporfavorpasemePageRoutingModule
  ],
  declarations: [EmaporfavorpasemePage]
})
export class EmaporfavorpasemePageModule {}
