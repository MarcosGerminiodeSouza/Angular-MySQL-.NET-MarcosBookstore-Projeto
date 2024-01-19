import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseModel } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url = environment.apiUrl;

  constructor(private httpClitent: HttpClient) { }

  ObterLivros() {
    return this.httpClitent.get<ResponseModel>(this.url);
  }
}
