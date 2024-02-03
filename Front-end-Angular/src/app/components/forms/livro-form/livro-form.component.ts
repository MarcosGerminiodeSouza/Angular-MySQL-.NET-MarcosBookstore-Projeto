import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LivroService } from '../../services/livro.service';
import { LivroModel } from '../../models/livro.model';
import { AutorService } from '../../services/autor.service';
import { CategoriaService } from '../../services/categoria.service';
import { EditoraService } from '../../services/editora.service';
import { AutorModel } from '../../models/autor.model';
import { CategoriaModel } from '../../models/categoria.model';
import { EditoraModel } from '../../models/editora.model';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<LivroModel>();
  @Input() btnDinamico!: string;
  @Input() tituloDinamico!: string;
  @Input() livroBanco: LivroModel | null = null;

  livroForm!: FormGroup;
  autores: AutorModel[] = [];
  categorias: CategoriaModel[] = [];
  editoras: EditoraModel[] = [];

  constructor(
    private livroService: LivroService,
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editoraService: EditoraService
  ) { }

  ngOnInit(): void {
    this.autorService.ObterAutores().subscribe((data) => {
      this.autores = data.dados;
    });

    this.categoriaService.ObterCategorias().subscribe((data) => {
      this.categorias = data.dados;
    });

    this.editoraService.ObterEditoras().subscribe((data) => {
      this.editoras = data.dados;
    });

    this.livroForm = new FormGroup({
      idt_livro: new FormControl(this.livroBanco ? this.livroBanco.idt_livro : 0),
      idt_autor: new FormControl(this.livroBanco ? this.livroBanco.idt_autor : null, [Validators.required]),
      idt_categoria: new FormControl(this.livroBanco ? this.livroBanco.idt_categoria : null, [Validators.required]),
      idt_editora: new FormControl(this.livroBanco ? this.livroBanco.idt_editora : null, [Validators.required]),
      des_imagem: new FormControl(this.livroBanco ? this.livroBanco.des_imagem : '', [Validators.required]),
      ind_lancamento: new FormControl(this.livroBanco ? this.livroBanco.ind_lancamento : 's', [Validators.required]),
      des_titulo: new FormControl(this.livroBanco ? this.livroBanco.des_titulo : '', [Validators.required]),
      des_temporada: new FormControl(this.livroBanco ? this.livroBanco.des_temporada : '', [Validators.required]),
      num_ano: new FormControl(this.livroBanco ? this.livroBanco.num_ano : 2023, [Validators.required]),
      val_livro: new FormControl(this.livroBanco ? this.livroBanco.val_livro : 10.00, [Validators.required]),
      qtd_livro_estoque: new FormControl(this.livroBanco ? this.livroBanco.qtd_livro_estoque : 1, [Validators.required])
    });
  }

  submit() {
    this.onSubmit.emit(this.livroForm.value);
  }
}
