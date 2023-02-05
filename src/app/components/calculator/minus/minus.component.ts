import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent implements OnInit {
  @Output() flagChanged= new EventEmitter();
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
}
