import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LivroModel } from 'src/app/components/models/livro.model';

@Component({
  selector: 'app-livraria',
  templateUrl: './livraria.component.html',
  styleUrls: ['./livraria.component.css']
})
export class LivrariaComponent implements OnInit {

  @Input()
  livro!: LivroModel;

  @Output() adicionarCarrinho: EventEmitter<LivroModel> = new EventEmitter<LivroModel>();

  constructor() { }

  ngOnInit(): void {
  }

  adicionarAoCarrinho(livro: LivroModel): void {
    console.log('livraria: enviando livro:', livro);
    this.adicionarCarrinho.emit(livro);
  }

}
