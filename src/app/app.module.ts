import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetenceComponent } from './competence/competence.component';
import { FormationComponent } from './formation/formation.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjetComponent } from './projet/projet.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CompetenceComponent,
    FormationComponent,
    ProfilComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
