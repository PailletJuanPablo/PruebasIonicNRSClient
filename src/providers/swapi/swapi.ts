import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
 Service to manage the data Flow from the API
*/

//Created an Interface to verify and show characters of Film correctly
interface Character {
  name:string,
  height: number,
  mass: number,
  gender: string,
  }


@Injectable()
export class SwapiProvider {

  constructor(public http: HttpClient) {
  }

  //Defining the base api URL
  base: string = "https://swapi.co/api/"

  //Http request to get films, starships or vehicles, accesable by another modules
  getData(type: string) {
    return this.http.get(this.base + type + "/");
  }

  //Http request to get details data of the Film
  getDetail(char) {
      return this.http.get(char);
  }

}
