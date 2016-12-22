import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'signup.html'
})
export class SignupPage {
 signup: {lname?: string, fname?: string, email?: string, username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController,public userData: UserData,public alertCtrl: AlertController) {
    
  }

 onSignup(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username,this.signup.password);
      let alert = this.alertCtrl.create({
                  title: 'Welcome!',  
                    subTitle: 'You have signed up successfully.',
                  buttons: ['OK']
                    });
                  alert.present();
     this.navCtrl.push(LoginPage);
    }
  }

}

 