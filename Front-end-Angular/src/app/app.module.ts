import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivroFormComponent } from './components/forms/livro-form/livro-form.component';

/*### Telas ###*/
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FiltroComponent } from './components/pages/home/filtro/filtro.component';
import { LivrariaComponent } from './components/pages/home/livraria/livraria.component';
import { LivroComponent } from './components/pages/livro/livro.component';
import { InserirComponent } from './components/pages/livro/inserir/inserir.component';
import { DetalhesComponent } from './components/pages/livro/detalhes/detalhes.component';
import { EditarComponent } from './components/pages/livro/editar/editar.component';
import { ApagarComponent } from './components/pages/livro/apagar/apagar.component';
import { CarrinhoComponent } from './components/pages/carrinho/carrinho.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CadastrarComponent } from './components/pages/login/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FiltroComponent,
    LivrariaComponent,
    LivroComponent,
    LivroFormComponent,
    InserirComponent,
    EditarComponent,
    CarrinhoComponent,
    LoginComponent,
    CadastrarComponent,
    DetalhesComponent,
    ApagarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
