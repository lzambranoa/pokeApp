import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PokeScreenComponent } from './screens/poke-screen/poke-screen.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CardsMenuComponent } from './components/cards-menu/cards-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PokeScreenComponent,
    CardsComponent,
    NavbarComponent,
    PaginationComponent,
    CardsMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
