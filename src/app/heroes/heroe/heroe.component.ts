import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    
})

export class HeroeComponent {

    nombre: string = 'Green Ligth';
    edad  : number = 33;

    get nombreCapitalizado(){
        return this.nombre.toLowerCase();
    }


    obtenerNombre(): string {
        return ` ${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Batman';

        if(this.nombre =="Batman"){
            this.nombre ="IronMan";
        } else {
            this.nombre = "Green Lighter";
        }
    };

    cambiarEdad():void {
        this.edad = 12;
    };

}