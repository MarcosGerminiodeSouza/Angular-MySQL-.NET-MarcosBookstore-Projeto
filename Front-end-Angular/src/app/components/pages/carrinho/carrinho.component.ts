import { Component, Input, OnInit } from '@angular/core';
import { LivroModel } from '../../models/livro.model';
import { LivroVendaModel } from '../../models/livro-venda.model';
import { LivroVendaService } from '../../services/venda-livro.service';
import { VendaService } from '../../services/venda.service';
import { LivroService } from '../../services/livro.service';
import { AutorService } from '../../services/autor.service';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens: LivroModel[] = [];

  constructor(
    private autor: AutorService,
    private carrinhoService: CarrinhoService,
    private livro: LivroService,
    private livroVenda: LivroVendaService,
    private venda: VendaService
  ) { }

  ngOnInit(): void {
    this.atualizarCarrinho();
  }

  atualizarCarrinho(): void {
    this.itens = this.carrinhoService.obterItens();
  }

  limparCarrinho(): void {
    this.carrinhoService.limparCarrinho();
    this.atualizarCarrinho();
  }

  calcularSubtotal(): number {
    return this.itens.reduce((subtotal, livro) => subtotal + livro.val_livro, 0);
  }

}
