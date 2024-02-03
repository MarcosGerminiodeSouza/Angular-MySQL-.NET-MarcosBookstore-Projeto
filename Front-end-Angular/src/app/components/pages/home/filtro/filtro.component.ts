import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LivroModel } from 'src/app/components/models/livro.model';
import { AutorService } from 'src/app/components/services/autor.service';
import { CarrinhoService } from 'src/app/components/services/carrinho.service';

import { EditoraService } from 'src/app/components/services/editora.service';
import { LivroService } from 'src/app/components/services/livro.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  livros: LivroModel[] = [];
  livrosGeral: LivroModel[] = [];

  constructor(
    private autorService: AutorService,
    private carrinhoService: CarrinhoService,
    private editoraService: EditoraService,
    private livroService: LivroService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.Lancamentos();
  }

  filtroForm = this.fb.group({
    fil: ['lan', [Validators.required]]
  });



  Lancamentos(): void {
    this.livroService.ObterLancamentos().subscribe(data => {
      this.livrosGeral = data.dados;
      this.livros = data.dados;
    });
  }

  ObterLivros(): void {
    this.livroService.ObterLivros().subscribe((data) => {
      data.dados.map((item) => {
        this.autorService.ObterAutorPorId(item.idt_autor).subscribe((aut) => {
          item.autorNome = aut.dados.nom_autor;
        });

        this.editoraService.ObterEditoraPorId(item.idt_editora).subscribe((edi) => {
          item.editoraNome = edi.dados.nom_editora;
        });
      });
      this.livrosGeral = data.dados;
      this.livros = data.dados;
    });
  }

  LivroBusca(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.livros = this.livrosGeral.filter(livro => {
      return livro.des_titulo.toLowerCase().includes(value);
    });
  }

  AutorBusca(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.livros = this.livrosGeral.filter(livro => {
      return livro.autorNome.toLowerCase().includes(value);
    });
  }

  EditoraBusca(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.livros = this.livrosGeral.filter(livro => {
      return livro.editoraNome.toLowerCase().includes(value);
    });
  }

  adicionarAoCarrinho(livro: LivroModel): void {
    this.carrinhoService.adicionarItem(livro);
  }

}
