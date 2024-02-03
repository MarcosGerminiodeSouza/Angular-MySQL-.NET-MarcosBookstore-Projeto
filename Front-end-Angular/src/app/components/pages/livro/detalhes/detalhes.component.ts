import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorModel } from 'src/app/components/models/autor.model';
import { CategoriaModel } from 'src/app/components/models/categoria.model';
import { EditoraModel } from 'src/app/components/models/editora.model';
import { LivroModel } from 'src/app/components/models/livro.model';
import { AutorService } from 'src/app/components/services/autor.service';
import { CategoriaService } from 'src/app/components/services/categoria.service';
import { EditoraService } from 'src/app/components/services/editora.service';
import { LivroService } from 'src/app/components/services/livro.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  id!: number;
  livro?: LivroModel;
  autor?: AutorModel;
  categoria?: CategoriaModel;
  editora?: EditoraModel;

  constructor(
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editoraService: EditoraService,
    private livroService: LivroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.livroService.ObterPorId(this.id).subscribe((data) => {
      this.livro = data.dados;
      this.dadosAdicionais();
    });
  }
  
  dadosAdicionais(): void {
    if (this.livro) {
      this.autorService.ObterAutorPorId(this.livro.idt_autor).subscribe((aut) => {
        this.autor = aut.dados;
      });

      this.categoriaService.ObterCategoriaPorId(this.livro.idt_categoria).subscribe((cat) => {
        this.categoria = cat.dados;
      });

      this.editoraService.ObterEditoraPorId(this.livro.idt_editora).subscribe((edi) => {
        this.editora = edi.dados;
      });
    }
  }
}
