import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }
  @Input() article:any;
  ngOnInit(): void {
  }

}
