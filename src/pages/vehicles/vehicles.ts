import { SwapiProvider } from './../../providers/swapi/swapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
Page to fetch and show starships
 */


@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  //Created a variable to store the characters of the movie
  vehicleList = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public swapi: SwapiProvider,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    //Stars loading Starships
    let loading = this.loadingCtrl.create({
      content: 'Loading Vehicles...'
    });
    loading.present();

    //Getting data. change the 'starships' string for anything to activate an error
    this.swapi.getData("vehicles").subscribe((vehicles: any) => {
      this.vehicleList = vehicles.results;
      loading.dismiss();
      console.log(this.vehicleList);
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
      subTitle: "Can't get the vehicles list",
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
