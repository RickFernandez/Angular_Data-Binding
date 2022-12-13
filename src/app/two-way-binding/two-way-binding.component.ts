import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  nome: string = "abc";
  nome2: string = "cde";
  nome3: string = "fgh";

  pessoa: any = {
    nome: "Henrique",
    idade: 19
  }

  constructor() { }

  ngOnInit(): void {
  }

}
