import { TitleStrategy } from "@angular/router"

export interface LivroModel {
  idt_livro?: number,
  idt_autor: number,
  idt_categoria: number,
  idt_editora: number,
  des_titulo: string,
  des_temporada: string,
  num_ano: number,
  val_livro: number,
  des_imagem: string,
  ind_lancamento: string,
  qtd_livro_estoque: number
}
