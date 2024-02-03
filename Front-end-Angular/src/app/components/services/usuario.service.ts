import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from "../models/usuario.model";
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = `${environment.baseUrl}Usuario`;

  constructor(private http: HttpClient) { }

  ObterUsuarios() : Observable<ResponseModel<UsuarioModel[]>> {
    return this.http.get<ResponseModel<UsuarioModel[]>>(`${this.url}/obter`);
  }

  ObterPorId(id: number) : Observable<ResponseModel<UsuarioModel>> {
    return this.http.get<ResponseModel<UsuarioModel>>(`${this.url}/obter/${id}`);
  }

  InserirNovoUsuario(novoUsuario: UsuarioModel) : Observable<ResponseModel<UsuarioModel[]>> {
    return this.http.post<ResponseModel<UsuarioModel[]>>(`${this.url}/criar`, novoUsuario);
  }

  EditarUsuario(editadoUsuario: UsuarioModel) : Observable<ResponseModel<UsuarioModel[]>> {
    return this.http.put<ResponseModel<UsuarioModel[]>>(`${this.url}/editar`, editadoUsuario);
  }

  DeletarUsuario(id: number) : Observable<ResponseModel<UsuarioModel[]>>{
    return this.http.delete<ResponseModel<UsuarioModel[]>>(`${this.url}/deletar/${id}`)
  }
}
