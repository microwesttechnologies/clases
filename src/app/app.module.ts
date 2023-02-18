import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { LayoutModule } from './layout/layout.module';

import { DragonballModule } from './dragonball/dragonball.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    LayoutModule,
    DragonballModule,
    
  ],
  providers: [],
  bootstrap: [
    AppComponent],
})
export class AppModule {}
