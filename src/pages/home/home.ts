import { SwapiProvider } from './../../providers/swapi/swapi';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
 Home Screen, will be a nice welcome to the app! 
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public swapi:SwapiProvider) {

    //First testing of the service to fetch data from Films API
    this.swapi.getData("films").subscribe((films)=>{
      console.log(films);
    })

  }

}
