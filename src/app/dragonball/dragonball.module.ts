import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DbzComponent } from './dbz/dbz.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { DbzService } from 'src/services/dbz.service';




@NgModule({
  declarations: [
   DbzComponent,
   PersonajesComponent,
   NuevoComponent
  ],
  exports: [
   DbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DragonballModule { }
