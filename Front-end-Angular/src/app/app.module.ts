import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LivroComponent } from './components/pages/livro/livro.component';
import { CarrinhoComponent } from './components/pages/carrinho/carrinho.component';
import { FiltroComponent } from './components/pages/home/filtro/filtro.component';
import { LivrariaComponent } from './components/pages/home/livraria/livraria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    LivroComponent,
    CarrinhoComponent,
    FiltroComponent,
    LivrariaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
