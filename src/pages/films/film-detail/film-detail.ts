import { CharDetailPage } from './../char-detail/char-detail';
import { SwapiProvider } from './../../../providers/swapi/swapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

/**
 Component to show the details of the selected film in a modal
 */

// Interface to define and verify the character Class accord to Typescript Good Practices
interface Character {
  name: string,
  height: number,
  mass: number,
  gender: string,
  hair_color:string,
  skin_color:string,
  birth_year:string
}

// Interface to define and verify the Planet Class accord to Typescript Good Practices
interface Planet {
  name: string,
  rotation_period: number,
  orbital_period: number,
  diameter: number,
  climate: number
}

@IonicPage()
@Component({
  selector: 'page-film-detail',
  templateUrl: 'film-detail.html',
})



export class FilmDetailPage {

  //Created a variable to store the film obtained by navParams
  film: any;
  //Created a variable to store the characters of the movie
  charsList = Array<Character>();
  //Created a variable to store the planets of the movie
  planetsList = Array<Planet>();
  //Created a Boolean variable to make testings
  error: boolean = false;
  //Loading variable to handle user experience
  loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public swapi: SwapiProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
    //Show a loading to get the details of Film
    this.loading = this.loadingCtrl.create({
      content: 'Loading Film Details...'
    });
    this.loading.present();
    this.film = this.navParams.get("film");
    console.log(this.film);
    //Call methods to get data
    this.getFilmPlanets(this.film.planets);
    this.getFilmChars(this.film.characters);
  }

  //Method to handle view close
  close() {
    this.viewCtrl.dismiss();
  }

  openCharDetail(char) {
    let charModal = this.modalCtrl.create(CharDetailPage, { char });
    charModal.present();
  }

  //Method to get the characters of the film
  getFilmChars(characters) {
    //Defined a variable to make a testing and stop the loop if an error detected
    characters.forEach(char => {
      if (this.error === false) {
        this.swapi.getDetail(char)
          .subscribe((char: Character) => {
            //Once we get the char data, is pushed with the interface defined
            this.charsList.push({
              name: char.name,
              height: char.height,
              mass: char.mass,
              gender: char.gender,
              hair_color:char.hair_color,
              skin_color:char.skin_color,
              birth_year:char.birth_year
            })
          }, error => {
            //Handle any error if getting data
            this.showErrorAlert();
            //Defining the error variable on true to stop the data loop
            this.error = true;
          })
      }
    });
    //if all Okay, we can continue.
    this.loading.dismiss();

    //Debugging purposes, showing data on console
    console.log(this.charsList)
  }

  //Method to get the planets of the film
  getFilmPlanets(planets) {
    //Defined a variable to make a testing and stop the loop if an error detected
    planets.forEach(planet => {
      if (this.error === false) {
        this.swapi.getDetail(planet)
          .subscribe((planet: Planet) => {
            //Once we get the planet data, is pushed with the interface defined
            this.planetsList.push({
              name: planet.name,
              rotation_period: planet.rotation_period,
              orbital_period: planet.orbital_period,
              diameter: planet.diameter,
              climate: planet.climate
            })
          }, error => {
            //Handle any error if getting data
            this.showErrorAlert();
            //Defining the error variable on true to stop the data loop
            this.error = true;
          })
      }
    });
    //Debugging purposes, showing data on console
    console.log(this.planetsList)
  }


  showErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ups',
      subTitle: "Theres a problem obtaining data",
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.close();
        }
      }]
    });
    alert.present();
  }

}


