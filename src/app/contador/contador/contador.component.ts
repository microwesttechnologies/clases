import { Component } from '@angular/core';

@Component({

    
  selector: 'app-contador',
  templateUrl: './contador.component.html' ,
})


export class ContadorComponent {
    public title : string = 'ContadorApp';
    public numero: number = 55;
    public base  : number = 5;
  
  
    sumar(base:number) {
     return this.numero += base;
    }
  
    restar(base: number) {
     return this.numero -= base;
    }
}
