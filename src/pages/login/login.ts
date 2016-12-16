import { Component } from '@angular/core';

import { NavController,AlertController,LoadingController   } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { UserData } from '../../providers/user-data';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData,public alertCtrl: AlertController,public loadingCtrl: LoadingController) { }
  
  onLogin(form) {
  this.submitted = true;    
   if (form.valid) {
        this.userData.getUsername().then(uname => {
            if(uname === this.login.username)
            {
              this.userData.getPassword().then(pwd => {
                if(pwd === this.login.password) 
                {
                  let loader = this.loadingCtrl.create({
                  content: "Please wait...",
                  duration: 200
                  });
                  loader.present();                  
                  this.navCtrl.setRoot(HomePage);
                }      
                else
                {        
                  let alert = this.alertCtrl.create({
                  title: 'Login failed!',  
                    subTitle: 'Please check your credentials!',
                  buttons: ['OK']
                    });
                  alert.present();
                }
             });
            }
            else
                {        
                  let alert = this.alertCtrl.create({
                  title: 'Login failed!',  
                    subTitle: 'Please check your credentials!',
                  buttons: ['OK']
                    });
                  alert.present();
                }
          });        
     }
    }

   onSignup() {
    this.navCtrl.push(SignupPage);
  }
} 
  
  
 