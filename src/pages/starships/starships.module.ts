import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarshipsPage } from './starships';

@NgModule({
  declarations: [
    StarshipsPage,
  ],
  imports: [
    IonicPageModule.forChild(StarshipsPage),
  ],
})
export class StarshipsPageModule {}
