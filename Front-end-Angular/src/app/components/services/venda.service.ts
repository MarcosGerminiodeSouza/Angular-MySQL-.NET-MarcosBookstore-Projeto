import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VendaModel } from "../models/venda.model";

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private url = environment.baseUrl + "Venda/obter";

  constructor(private httpClitent: HttpClient) { }

  ObterVendas() {
    return this.httpClitent.get<VendaModel[]>(this.url);
  }
}
