import { Component, OnInit } from '@angular/core';
import { PokemonApp } from 'src/app/interfaces/pokemonNames';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke-screen',
  templateUrl: './poke-screen.component.html',
  styleUrls: ['./poke-screen.component.css']
})
export class PokeScreenComponent implements OnInit {

  constructor(private pokeService: PokeService) { }

  public isDataReady?: PokemonApp[]

  ngOnInit(): void {

    this.getListPokemon();
  }

  get isDataReadyList() {
    return !!this.isDataReady
  }

  getListPokemon() {
    return this.pokeService.getPokemonList()
      .subscribe(resp => {
        console.log(resp)
      })
  }

}
