import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
Page to show details of the movie character
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

@IonicPage()
@Component({
  selector: 'page-char-detail',
  templateUrl: 'char-detail.html',
})
export class CharDetailPage {
//Defined a variable character with the interface
char:Character;
//We have optimized the queries maked them in the before view

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    //Getting the char pushed from before view
    this.char = this.navParams.get("char");
  }

 //Method to close modal
  close(){
    this.viewCtrl.dismiss();
  }

}
