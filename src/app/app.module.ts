
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Module required for http request
import { HttpClientModule } from '@angular/common/http';

//Provider to manage data flow
import { SwapiProvider } from '../providers/swapi/swapi';

//Page modules imported to add Lazy Load Feature of Ionic 3
import { StarshipsPageModule } from './../pages/starships/starships.module';
import { FilmsPageModule } from './../pages/films/films.module';
import { VehiclesPageModule } from '../pages/vehicles/vehicles.module';
import { FilmDetailPageModule } from './../pages/films/film-detail/film-detail.module';
import { CharDetailPageModule } from './../pages/films/char-detail/char-detail.module';

//Provider to serve native notifications
import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    //Page modules imported to add Lazy Load Feature of Ionic 3
    FilmsPageModule,
    VehiclesPageModule,
    StarshipsPageModule,
    FilmDetailPageModule,
    CharDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SwapiProvider,
    OneSignal
  ]
})
export class AppModule { }
