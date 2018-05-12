import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes = [{
    casa: 'DC',
    nombre: 'Batman'
  }, {
    casa: 'Marvel',
    nombre: 'Ironman'
  }];

  casaFiltro = '';

  filtrarCasa( casa ) {

    if ( casa === '') { return this.heroes; }

    return this.heroes.filter( heroe => {
      return heroe.casa === casa;
    });

  }

}
