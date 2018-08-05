import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  eventSource = [];
  viewTitle: string;
  private selectedDay = new Date();
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay    
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {    
  }

  onViewTitleChanged(title) {    
    this.viewTitle = title;
  }

  onTimeSelected(event) {    
    this.selectedDay = event.selectedTime;    
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.startTime).format('LLLL');
    let alert = this.alertCtrl.create({
      title: `${event.title}`,
      subTitle: `From: ${start}<br/>To: ${end}`,
      buttons: ['OK']
    });
    alert.present();
  }

  onCurrentDateChanged(event) {
  }

  editTime() {
    this.navCtrl.push('TimeDetailPage', {selectedDay: this.selectedDay});
  }
}