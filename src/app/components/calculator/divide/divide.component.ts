import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {
  @Output() operationResult= new EventEmitter();
  @Input() num1: string='';
  @Input() num2: string='';
  number1: number=0;
  number2: number=0;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChange(){
  console.log(this.num1);
  }
  divideNumbers(number1:number, number2:number): string{
    let operationResult:string='';
    if (number2!=0) {
      console.log(operationResult=String(number1/number2));
      return operationResult=String(number1/number2);
    } else {
      console.log("Error division por cero");
      return "Error division por cero";
    }
    

  }
}
