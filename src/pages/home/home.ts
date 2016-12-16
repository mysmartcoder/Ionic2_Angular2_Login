import { Component } from '@angular/core';

import { NavController,AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public userData: UserData) { }

  ionViewDidLoad() {
    console.log('Hello Userpage Page');
  }

   logout() {
    this.userData.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}