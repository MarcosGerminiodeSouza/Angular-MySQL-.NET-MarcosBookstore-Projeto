import { TitleStrategy } from "@angular/router"

export interface ResponseModel<T> {
  dados: T,
  menssagem: string,
  sucesso: boolean
}
