import { Component } from '@angular/core';
import { Events,Platform} from 'ionic-angular';
import { TranslateService } from 'ng2-translate/src/translate.service';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { UserData } from '../providers/user-data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  constructor(
    public events: Events,
    public platform: Platform,
    public userData: UserData,
    public storage: Storage,
    public translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

       translate.addLangs(["en", "ab"]);
        translate.setDefaultLang('en');
        
    });
     this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enablePage(hasLoggedIn === true);
    });

   // translate.addLangs(["en", "fr"]);
       // translate.setDefaultLang('en');

       // let browserLang = translate.getBrowserLang();
       // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    this.listenToLoginEvents();
  }
  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enablePage(true);
    });
  }

  enablePage(loggedIn) {
   
  }
}


