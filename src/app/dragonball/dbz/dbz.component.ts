import { Component } from '@angular/core';
import { Personaje } from 'src/interfaces/personaje.interface';
import { DbzService } from 'src/services/dbz.service';


@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.scss'],
})
export class DbzComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }
get personajes() {
  return this.dbzService.Personajes;
}


  constructor(private dbzService: DbzService) {
    
  }

}
