import { Component, Input, OnInit } from '@angular/core';
import { LivroModel } from 'src/app/components/models/livro.model';

@Component({
  selector: 'app-livraria',
  templateUrl: './livraria.component.html',
  styleUrls: ['./livraria.component.css']
})
export class LivrariaComponent implements OnInit {

  @Input()
  livro!: LivroModel;

  constructor() { }

  ngOnInit(): void {
  }

}
