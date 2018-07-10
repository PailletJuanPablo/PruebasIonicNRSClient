import { FilmDetailPage } from './film-detail/film-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { SwapiProvider } from './../../providers/swapi/swapi';

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  // We create a variable to store the films received by the API
  // 
  films:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public swapi: SwapiProvider, private modalCtrl: ModalController) {
    //We fetch the films data in the constructor, and store them in a variable.
    this.swapi.getData('films').subscribe((films:any)=>{
      this.films = films.results;
      console.log(this.films)
    })

  }

  openFilm(film) {
    let myModal = this.modalCtrl.create(FilmDetailPage,{film});
    myModal.present();  
  }

}
