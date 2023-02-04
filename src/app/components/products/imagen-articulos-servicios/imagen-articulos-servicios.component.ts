import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-articulos-servicios',
  templateUrl: './imagen-articulos-servicios.component.html',
  styleUrls: ['./imagen-articulos-servicios.component.css']
})
export class ImagenArticulosServiciosComponent implements OnInit {

  constructor() { }
  @Input() article:any;
  ngOnInit(): void {
  }

}
