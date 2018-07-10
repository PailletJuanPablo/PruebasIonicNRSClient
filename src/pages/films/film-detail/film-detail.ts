import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 Component to show the details of the selected film in a modal
 */

@IonicPage()
@Component({
  selector: 'page-film-detail',
  templateUrl: 'film-detail.html',
})
export class FilmDetailPage {

  //Created a variable to store the film obtained by navParams
  film:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
   this.film = this.navParams.get("film");
   console.log(this.film)
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
