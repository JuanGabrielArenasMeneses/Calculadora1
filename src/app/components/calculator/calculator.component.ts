import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { DivideComponent } from "./divide/divide.component";
import { EqualsComponent } from "./equals/equals.component";
import { MinusComponent } from "./minus/minus.component";
import { MultiplicateComponent } from "./multiplicate/multiplicate.component";
import { PlusComponent } from "./plus/plus.component";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private divideNum = new DivideComponent();
  private equalsNum = new EqualsComponent();
  private minusNum = new MinusComponent();
  private multiplNum = new MultiplicateComponent();
  private plusNum = new PlusComponent();
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
      console.log ('number 1 '+this.number1);
    } else {
      this.number2=this.number2+element.value;
      console.log ('number 2 '+this.number2);
    }
    
    
  }
  negate(): void {
    if (!(this.flag)) {
      this.number1= String(parseInt(this.number1)*(-1));
      console.log ('number 1 '+this.number1);
    } else {
      this.number2= String(parseInt(this.number2)*(-1));
      console.log ('number 2 '+this.number2);
    }
  }
  clear(): void {
    
      this.number1= '';
      console.log ('number 1 '+this.number1);
    
      this.number2= '';
      console.log ('number 2 '+this.number2);
    
  }
  delete(): void {
    if (!(this.flag)) {
      let num: string[]=this.number1.split('');
      this.number1=String((num.slice(0,(num.length)-1))).replace(/,/g,'');
      console.log (num);
      console.log ('number 1 '+this.number1);
    } else {
      let num: string[]=this.number2.split('');
      this.number2=String((num.slice(0,(num.length)-1))).replace(/,/g,'');
      console.log (num);
      console.log ('number 2 '+this.number2);
    }
  } 
  percent(): void {
    
  }
  divide(): void{
    this.divideNum.divideNumbers
      
    
  }
  equals(): void{
    //this.equalsNum.equalsNumbers
  }
  minus(): void{
    //this.minusNum.minsNumbers
  }
  multiplicate(): void{
    //this.multiplNum.multiplicateNumbers
  }
  plus(): void{
    //this.plusNum.plusNumbers
  }
}
