import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { LoginDTO } from '../../models/login.dto';
import { ClientService } from '../../services/domain/client.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  _login : LoginDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public clientService: ClientService) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    //this.navCtrl.setRoot('CategoriasPage');
  }

  login() {
    this.navCtrl.setRoot('GraphicsPage');   
  }
}