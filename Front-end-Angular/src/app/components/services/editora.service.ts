import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EditoraModel } from "../models/editora.model";

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  private url = environment.baseUrl + "Editora/obter";

  constructor(private httpClitent: HttpClient) { }

  ObterEditoras() {
    return this.httpClitent.get<EditoraModel[]>(this.url);
  }
}
