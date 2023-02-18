import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from 'src/interfaces/personaje.interface';
import { DbzService } from 'src/services/dbz.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent {

  @Input('new') nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }

  // cambiarPoder(event: any) {
  //   console.log(event.target.value);
  // }

  constructor(private dbzService: DbzService) {}


    agregar() {
      if (this.nuevo.nombre.trim().length === 0) {
        return;
      }
        this.dbzService.agregarPersonajes(this.nuevo);
      
      console.log(this.nuevo);
  
      // this.onNuevoPersonaje.emit(this.nuevo);
      // debugger depurador de google chrome
    }
    
    


  
}

