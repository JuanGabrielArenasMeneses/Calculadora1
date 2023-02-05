import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {
  @Input() num: string='';
  number1: number=0;
  number2: number=0;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChange(){
  console.log(this.num);

  }
}
