import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LivroModel } from "../models/livro.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = environment.baseUrl + "Categoria/obter";

  constructor(private httpClitent: HttpClient) { }

  ObterCategorias() {
    return this.httpClitent.get<LivroModel[]>(this.url);
  }
}
