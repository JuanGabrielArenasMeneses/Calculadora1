import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculadoraForm: FormGroup
  result: number=0;

    constructor(private formBuilder: FormBuilder) { 
      this.calculadoraForm = formBuilder.group(
        {
          number1 :["", Validators.required],
          number2 :["", Validators.required],
          
        }
      )
    }

  ngOnInit(): void {
    
  }

  calcular(){
    console.log('entro');
    
    return this.result=(+this.calculadoraForm.value.number1 + +this.calculadoraForm.value.number2);
    
  }
}
