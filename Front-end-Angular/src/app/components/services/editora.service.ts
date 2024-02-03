import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EditoraModel } from "../models/editora.model";
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  private url = environment.baseUrl + "Editora";

  constructor(private http: HttpClient) { }

  ObterEditoras() : Observable<ResponseModel<EditoraModel[]>> {
    return this.http.get<ResponseModel<EditoraModel[]>>(`${this.url}/obter`);
  }

  ObterEditoraPorId(id: number) : Observable<ResponseModel<EditoraModel>> {
    return this.http.get<ResponseModel<EditoraModel>>(`${this.url}/obter/${id}`);
  }

  CriarEditora(novaEditora: EditoraModel) : Observable<ResponseModel<EditoraModel[]>> {
    return this.http.post<ResponseModel<EditoraModel[]>>(`${this.url}/criar`, novaEditora);
  }

  EditarEditora(editadoEditora: EditoraModel) : Observable<ResponseModel<EditoraModel[]>> {
    return this.http.put<ResponseModel<EditoraModel[]>>(`${this.url}/editar`, editadoEditora);
  }

  DeletarEditora(id: number) : Observable<ResponseModel<EditoraModel[]>>{
    return this.http.delete<ResponseModel<EditoraModel[]>>(`${this.url}/deletar/${id}`)
  }
}
