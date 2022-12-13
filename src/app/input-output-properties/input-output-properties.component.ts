import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertiesComponent implements OnInit {

  nomeDoCurso: string = "Angular";

  valorInicial: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onMudouValor(evento: any): void {
    console.log(evento.novoValor);
    
  }

}
