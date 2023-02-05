import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equals',
  templateUrl: './equals.component.html',
  styleUrls: ['./equals.component.css']
})
export class EqualsComponent implements OnInit {
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
