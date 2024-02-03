import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoriaModel } from '../models/categoria.model';
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = environment.baseUrl + "Categoria";

  constructor(private http: HttpClient) { }

  ObterCategorias() : Observable<ResponseModel<CategoriaModel[]>> {
    return this.http.get<ResponseModel<CategoriaModel[]>>(`${this.url}/obter`);
  }

  ObterCategoriaPorId(id: number) : Observable<ResponseModel<CategoriaModel>> {
    return this.http.get<ResponseModel<CategoriaModel>>(`${this.url}/obter/${id}`);
  }

  CriarCategoria(novaCategoria: CategoriaModel) : Observable<ResponseModel<CategoriaModel[]>> {
    return this.http.post<ResponseModel<CategoriaModel[]>>(`${this.url}/criar`, novaCategoria);
  }

  EditarCategoria(editadoCategoria: CategoriaModel) : Observable<ResponseModel<CategoriaModel[]>> {
    return this.http.put<ResponseModel<CategoriaModel[]>>(`${this.url}/editar`, editadoCategoria);
  }

  DeletarCategoria(id: number) : Observable<ResponseModel<CategoriaModel[]>>{
    return this.http.delete<ResponseModel<CategoriaModel[]>>(`${this.url}/deletar/${id}`)
  }
}
