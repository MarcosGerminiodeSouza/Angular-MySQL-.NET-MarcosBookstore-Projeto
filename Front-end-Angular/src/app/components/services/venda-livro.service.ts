import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LivroVendaModel } from "../models/livro-venda.model";

@Injectable({
  providedIn: 'root'
})
export class LivroVendaService {

  private url = environment.baseUrl + "LivroVenda/obter";

  constructor(private httpClitent: HttpClient) { }

  ObterLivroVendas() {
    return this.httpClitent.get<LivroVendaModel[]>(this.url);
  }
}
