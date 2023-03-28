import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonApp, Result } from '../interfaces/pokemonNames';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  public baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20

  getPokemonList(){
    return this.http.get<PokemonApp>(`${this.baseUrl}pokemon?offset=0&limit=20`)
  }
}
