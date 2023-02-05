import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent implements OnInit {
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
    subtractNumbers(number1:number, number2:number): string{
      let operationResult:string='';
      console.log(operationResult=String(number1-number2));
      return operationResult=String(number1-number2);
  
    }
}
