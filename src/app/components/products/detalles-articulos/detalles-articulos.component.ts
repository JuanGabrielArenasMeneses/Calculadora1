import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-articulos',
  templateUrl: './detalles-articulos.component.html',
  styleUrls: ['./detalles-articulos.component.css']
})
export class DetallesArticulosComponent implements OnInit {

  constructor() { }
  @Input() article:any;
  ngOnInit(): void {
  }

}
