import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

const BASE_API_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getListOfPokemons(): Observable<any> {
    return this.http.get(`${BASE_API_URL}pokemon/?limit=5`)
      .pipe(
        switchMap( data => (data as any).results)
      );
  }

  public getPokemonInfo(url: string): Observable<any> {
    return this.http.get(url);
  }
}
