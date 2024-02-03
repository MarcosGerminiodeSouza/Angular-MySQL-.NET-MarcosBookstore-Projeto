import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LivroModel } from "../models/livro.model";
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url = `${environment.baseUrl}Livro`;

  constructor(private http: HttpClient) { }

  ObterLivros() : Observable<ResponseModel<LivroModel[]>> {
    return this.http.get<ResponseModel<LivroModel[]>>(`${this.url}/obter`);
  }

  ObterLancamentos() : Observable<ResponseModel<LivroModel[]>> {
    return this.http.get<ResponseModel<LivroModel[]>>(`${this.url}/obter/lancamento`);
  }

  ObterPorId(id: number) : Observable<ResponseModel<LivroModel>> {
    return this.http.get<ResponseModel<LivroModel>>(`${this.url}/obter/${id}`);
  }

  InserirNovoLivro(novoLivro: LivroModel) : Observable<ResponseModel<LivroModel[]>> {
    return this.http.post<ResponseModel<LivroModel[]>>(`${this.url}/criar`, novoLivro);
  }

  EditarLivro(editadoLivro: LivroModel) : Observable<ResponseModel<LivroModel[]>> {
    return this.http.put<ResponseModel<LivroModel[]>>(`${this.url}/editar`, editadoLivro);
  }

  DeletarLivro(id: number) : Observable<ResponseModel<LivroModel[]>>{
    return this.http.delete<ResponseModel<LivroModel[]>>(`${this.url}/deletar/${id}`)
  }

}
