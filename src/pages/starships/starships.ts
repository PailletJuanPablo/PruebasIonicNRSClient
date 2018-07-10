import { SwapiProvider } from './../../providers/swapi/swapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
Page to fetch and show starships
 */


@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  //Created a variable to store the characters of the movie
  starShipsList = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public swapi: SwapiProvider,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    //Stars loading Starships
    let loading = this.loadingCtrl.create({
      content: 'Loading Starships...'
    });
    loading.present();

    //Getting data. change the 'starships' string for anything to activate an error
    this.swapi.getData("starships").subscribe((startships: any) => {
      this.starShipsList = startships.results;
      loading.dismiss();
      console.log(this.starShipsList);
    }, error => {
      //If we got an error, we dismiss the loader and show an alert to the user.
      loading.dismiss();
      this.showAlert();
    })

  }

  //method to show alert to user
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ups',
      subTitle: "Can't get the starships list",
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.navCtrl.popToRoot()
        }
      }]
    });
    alert.present();
  }
}
