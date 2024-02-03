import { Injectable } from '@angular/core';
import { LivroModel } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: LivroModel[] = [];

  adicionarItem(livro: LivroModel): void {
    console.log('carrinhoServive: adicionarItem: ', livro);
    this.itens.push(livro);
  }

  obterItens(): LivroModel[] {
    console.log('carrinhoServive: obterItens: ', this.itens);
    return this.itens;
  }

  limparCarrinho(): void {
    this.itens = [];
  }
}
