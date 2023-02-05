import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-equals',
  templateUrl: './equals.component.html',
  styleUrls: ['./equals.component.css']
})
export class EqualsComponent implements OnInit {
  @Input() num: string='';
  number1: number=0;
  number2: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
