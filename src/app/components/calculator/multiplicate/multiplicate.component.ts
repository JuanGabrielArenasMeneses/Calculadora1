import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiplicate',
  templateUrl: './multiplicate.component.html',
  styleUrls: ['./multiplicate.component.css']
})
export class MultiplicateComponent implements OnInit {
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
    multipliateNumbers(number1:number, number2:number): string{
      let operationResult:string='';
      console.log(operationResult=String(number1*number2));
      return operationResult=String(number1*number2);
  
    }
}
