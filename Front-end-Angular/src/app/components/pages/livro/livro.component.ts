import { Component, OnInit } from '@angular/core';
import { LivroModel } from '../../models/livro.model';
import { LivroService } from '../../services/livro.service';
import { AutorService } from '../../services/autor.service';
import { CategoriaService } from '../../services/categoria.service';
import { EditoraService } from '../../services/editora.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livros: LivroModel[] = [];
  livrosGeral: LivroModel[] = [];

  constructor(
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editoraService: EditoraService,
    private livroService: LivroService
  ) { }

  ngOnInit(): void {
    this.livroService.ObterLivros().subscribe(data => {
      data.dados.map((item) => {
        this.autorService.ObterAutorPorId(item.idt_autor).subscribe((aut) => {
          item.autorNome = aut.dados.nom_autor;
        });

        this.categoriaService.ObterCategoriaPorId(item.idt_categoria).subscribe((cat) => {
          item.categoriaNome = cat.dados.des_categoria;
        });

        this.editoraService.ObterEditoraPorId(item.idt_editora).subscribe((edi) => {
          item.editoraNome = edi.dados.nom_editora;
        });
      });
      this.livrosGeral = data.dados;
      this.livros = data.dados;
    });
  }

  Buscar(event : Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.livros = this.livrosGeral.filter(livro => {
      return livro.des_titulo.toLowerCase().includes(value);
    });
  }

}
