import { Injectable } from "@angular/core";
import { Personaje } from "src/interfaces/personaje.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Picoro',
          poder: 7800
        },
        {
          nombre: 'Bulma',
          poder: 800
        },
        {
          nombre: 'Gothem',
          poder: 9800
        },
      ];


      get Personajes(): Personaje[] {
        return [...this._personajes];
      }

    constructor(){
        console.log('Servicio Inicializado')
    }

    agregarPersonajes(personaje: Personaje){
        this._personajes.push(personaje);
    }

}