import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharDetailPage } from './char-detail';

@NgModule({
  declarations: [
    CharDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CharDetailPage),
  ],
})
export class CharDetailPageModule {}
