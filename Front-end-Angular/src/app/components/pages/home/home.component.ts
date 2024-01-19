import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Observable } from 'rxjs';
import { LivroModel } from '../../models/livro.model';
import { ResponseModel } from '../../models/response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livros$ = new Observable<LivroModel[]>();
  livros: LivroModel[] = [];

  constructor(private livroService: LivroService) { }

  GetLivros() {
    //this.livros$ = this.livroService.ObterLivros();
  }

  ngOnInit(): void {
    this.livroService.ObterLivros().subscribe(data => {
      this.livros = data.dados;
    });
  }

}
