import { Component, OnInit } from '@angular/core';
import { LivroModel } from '../../models/livro.model';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livros: LivroModel[] = [];

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.ObterLivros().subscribe(data => {
      this.livros = data.dados;
    });
  }

}
