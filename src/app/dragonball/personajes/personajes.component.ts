import { Component, Input } from '@angular/core';
import { Personaje } from 'src/interfaces/personaje.interface';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  @Input('data')  personajes:Personaje [] = [];
 
}
