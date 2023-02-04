import { Component, OnInit } from '@angular/core';
import { Article, ArticleRepair } from "./Product";
import { articles } from "./articles";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  categories:string[]= ["Hogar", "Tecnologia", "Electrodomesticos", "Herramientas", "cocina","servicios"];
  options:string="";

  constructor() { }

  ngOnInit(): void {
  }
  choiceCategory(category: string){
    
    this.options=category;
    console.log(this.options);
    console.log(articles)
  }

}
