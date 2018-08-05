import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeDetailPage } from './timeDetail';

@NgModule({
  declarations: [
    TimeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeDetailPage),
  ],
})
export class TimeDetailPageModule {}