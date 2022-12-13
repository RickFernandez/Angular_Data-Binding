import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.com";

  cursoAngular: boolean = true;

  urlImagem: string = "https://picsum.photos/200/300?grayscale";
  urlImagem2: string = "https://picsum.photos/200/300.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

}
