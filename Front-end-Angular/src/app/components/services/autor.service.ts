import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AutorModel } from "../models/autor.model";
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private url = environment.baseUrl + "Autor";

  constructor(private http: HttpClient) { }

  ObterAutores() : Observable<ResponseModel<AutorModel[]>> {
    return this.http.get<ResponseModel<AutorModel[]>>(`${this.url}/obter`);
  }

  ObterAutorPorId(id: number) : Observable<ResponseModel<AutorModel>> {
    return this.http.get<ResponseModel<AutorModel>>(`${this.url}/obter/${id}`);
  }

  CriarAutor(novoAutor: AutorModel) : Observable<ResponseModel<AutorModel[]>> {
    return this.http.post<ResponseModel<AutorModel[]>>(`${this.url}/criar`, novoAutor);
  }

  EditarAutor(editadoAutor: AutorModel) : Observable<ResponseModel<AutorModel[]>> {
    return this.http.put<ResponseModel<AutorModel[]>>(`${this.url}/editar`, editadoAutor);
  }

  DeletarAutor(id: number) : Observable<ResponseModel<AutorModel[]>>{
    return this.http.delete<ResponseModel<AutorModel[]>>(`${this.url}/deletar/${id}`)
  }
}
