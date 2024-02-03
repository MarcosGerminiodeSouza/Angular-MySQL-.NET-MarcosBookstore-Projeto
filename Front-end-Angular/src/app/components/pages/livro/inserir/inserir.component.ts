import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivroModel } from 'src/app/components/models/livro.model';
import { LivroService } from 'src/app/components/services/livro.service';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent {

  tituloDinamico = "Adicionar Novo Livro:";
  btnDinamico = "Adicionar";

  constructor(
    private livroService: LivroService,
    private router: Router
  ) { }

  InserirNovoLivro(novoLivro : LivroModel) {
    this.livroService.InserirNovoLivro(novoLivro).subscribe( _ => {
      this.livroService.ObterLivros().subscribe( _ => {
        this.router.navigate(['/Livros']);
      });
    });
  }
}
