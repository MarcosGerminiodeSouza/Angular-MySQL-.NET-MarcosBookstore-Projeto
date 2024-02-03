import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroModel } from 'src/app/components/models/livro.model';
import { AutorService } from 'src/app/components/services/autor.service';
import { CategoriaService } from 'src/app/components/services/categoria.service';
import { EditoraService } from 'src/app/components/services/editora.service';
import { LivroService } from 'src/app/components/services/livro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id = Number(this.rota.snapshot.paramMap.get('id'));
  tituloDinamico = `Editar Livro #${this.id}`;
  btnDinamico = "Salvar";
  livroBanco!: LivroModel;

  constructor(
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editoraService: EditoraService,
    private livroService: LivroService,
    private rota: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.livroService.ObterPorId(this.id).subscribe((data) => {
      this.livroBanco = data.dados;
    });
  }

  EditarLivro(livro: LivroModel) {
    this.livroService.EditarLivro(livro).subscribe( _ => {
      this.livroService.ObterLivros().subscribe( _ => {
        this.router.navigate(['/Livros']);
      });
    });
  }

}
