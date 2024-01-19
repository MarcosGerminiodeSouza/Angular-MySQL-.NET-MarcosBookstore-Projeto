import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AutorModel } from "../models/autor.model";

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private url = environment.baseUrl + "Autor/obter";

  constructor(private httpClitent: HttpClient) { }

  ObterAutores() {
    return this.httpClitent.get<AutorModel[]>(this.url);
  }
}
