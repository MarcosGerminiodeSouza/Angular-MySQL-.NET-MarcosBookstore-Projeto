import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroModel } from 'src/app/components/models/livro.model';
import { LivroService } from 'src/app/components/services/livro.service';

@Component({
  selector: 'app-apagar',
  templateUrl: './apagar.component.html',
  styleUrls: ['./apagar.component.css']
})
export class ApagarComponent implements OnInit {

  id = Number(this.route.snapshot.paramMap.get("id"));
  livroBanco?: LivroModel;

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.livroService.ObterPorId(this.id).subscribe((data) => {
      this.livroBanco = data.dados;
    });
  }

  Excluir(id: number) {
    this.livroService.DeletarLivro(id).subscribe( _ => {
      this.livroService.ObterLivros().subscribe( _ => {
        this.router.navigate(['/Livros']);
      });
    });
  }
}
