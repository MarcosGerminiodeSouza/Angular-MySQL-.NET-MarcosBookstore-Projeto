import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.baseUrl + "Usuario/obter";

  constructor(private httpClitent: HttpClient) { }

  ObterUsuarios() {
    return this.httpClitent.get<UsuarioModel[]>(this.url);
  }
}
