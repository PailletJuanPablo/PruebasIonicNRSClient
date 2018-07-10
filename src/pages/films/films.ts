import { FilmDetailPage } from './film-detail/film-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,AlertController , LoadingController } from 'ionic-angular';
import { SwapiProvider } from './../../providers/swapi/swapi';

/**
 * Page to show the Films List
 *
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  // We create a variable to store the films received by the API
  // 
  films: Object;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public swapi: SwapiProvider,
    private modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {

    //Show a loading when getting the Film List
    let loading = this.loadingCtrl.create({
      content: 'Loading Films...'
    });
    loading.present();

    //Fetch the films data in the constructor, and store them in a variable.
    this.swapi.getData('films').subscribe((films: any) => {
      this.films = films.results;
      console.log(this.films);
      loading.dismiss();
    },
      //We make an error handling if any problem happens
      error => {
        loading.dismiss();
        this.showAlert();
      })

  }

  openFilm(film) {
    let myModal = this.modalCtrl.create(FilmDetailPage, { film });
    myModal.present();
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Ups',
      subTitle: "Can't get the films list",
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
