import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number=0;
  number1: string='';
  number2: string='';
  flag: boolean=false;
    constructor() { 
      
    }

  ngOnInit(): void {
    
  }
  addNumber(event: Event): void {
    const element= event.target as HTMLInputElement;
    console.log (element.value);
    if (!(this.flag)) {
      this.number1=this.number1+element.value;
      console.log (this.number1);
    } else {
      this.number2=this.number2+element.value;
      console.log (this.number2);
    }
    
    
  }
  negate(): void {
    if (!(this.flag)) {
      this.number1= String(parseInt(this.number1)*(-1));
      console.log (this.number1);
    } else {
      this.number2= String(parseInt(this.number2)*(-1));
      console.log (this.number2);
    }
  }
  clear(): void {
    
      this.number1= '';
      console.log (this.number1);
    
      this.number2= '';
      console.log (this.number2);
    
  }
  delete(): void {
    if (!(this.flag)) {
      let num: string[]=this.number1.split('');
      console.log (num);
      num.pop;
      this.number1=(num).toString();
      console.log (num);
      console.log (this.number2);
    } else {
      let num: string[]=this.number2.split('');
      num.pop;
      this.number1=(num).toString();
      console.log (num);
      console.log (this.number2);
    }
  } 
  percent(): void {
    
  } 
}
