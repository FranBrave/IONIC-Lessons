import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }


  getUsers() {

    return this.http.get('https://jsonplaceholder.typicode.com/users')
    
  }


  getMenuOpts() {

    return this.http.get<Componente[]>('/assets/data/menu-opt.json')
    
  }

  getAlbums() {

    return this.http.get<Componente[]>('https://jsonplaceholder.typicode.com/albums')

  }

  getHeroes() {

    return this.http.get<Componente[]>('/assets/data/superheroes.json')
    .pipe(
      delay(1500)
    );
    
  }

}
