import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorDigitado: string = "";
  valorSalvo: any;

  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado() {
    alert("Clicado!");
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorDigitado = ((<HTMLInputElement>evento.target).value);
    
  }

  salvarValor(valor: string): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

}
