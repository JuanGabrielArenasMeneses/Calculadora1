import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-multiplicate',
  templateUrl: './multiplicate.component.html',
  styleUrls: ['./multiplicate.component.css']
})
export class MultiplicateComponent implements OnInit {
  @Input() num: string='';
  number1: number=0;
  number2: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
