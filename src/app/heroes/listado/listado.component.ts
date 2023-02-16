import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})


export class ListadoComponent  {

heroes      : string[] = ['Goku', 'Vegueta', 'Picoro', 'Gohan'];
heroeBorrado: string = '';

borrarComponent() {
 this.heroeBorrado = this.heroes.shift() || '';
}


crearComponent() {
  console.log(this.heroeBorrado);
}





}
