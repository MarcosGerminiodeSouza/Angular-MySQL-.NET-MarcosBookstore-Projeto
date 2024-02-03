import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CarrinhoComponent } from './components/pages/carrinho/carrinho.component';
import { LivroComponent } from './components/pages/livro/livro.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CadastrarComponent } from './components/pages/login/cadastrar/cadastrar.component';
import { InserirComponent } from './components/pages/livro/inserir/inserir.component';
import { EditarComponent } from './components/pages/livro/editar/editar.component';
import { DetalhesComponent } from './components/pages/livro/detalhes/detalhes.component';
import { ApagarComponent } from './components/pages/livro/apagar/apagar.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Livros', component: LivroComponent, pathMatch: 'full' },
  { path: 'Livros/Inserir', component: InserirComponent, pathMatch: 'full' },
  { path: 'Livros/Editar/:id', component: EditarComponent},
  { path: 'Livros/Detalhes/:id', component: DetalhesComponent},
  { path: 'Livros/Apagar/:id', component: ApagarComponent},
  { path: 'Login', component: LoginComponent, pathMatch: 'full' },
  { path: 'Login/Cadastrar', component: CadastrarComponent, pathMatch: 'full' },
  { path: 'Carrinho', component: CarrinhoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
