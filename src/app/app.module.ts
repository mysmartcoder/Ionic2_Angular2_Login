import {BrowserModule} from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpModule,Http} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule} from 'ng2-translate';
import { TranslateLoader,TranslateStaticLoader } from 'ng2-translate';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { UserData } from '../providers/user-data';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,       
    HomePage,
    LoginPage,
    SignupPage
  ],
  imports: [BrowserModule,HttpModule,IonicModule.forRoot(MyApp),TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/i18n', '.json'),
            deps: [Http]
        })],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,        
    HomePage,
    LoginPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserData, Storage]
})
export class AppModule {}

