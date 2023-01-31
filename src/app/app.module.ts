import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { EqualsComponent } from './components/calculator/equals/equals.component';
import { PlusComponent } from './components/calculator/plus/plus.component';
import { MinusComponent } from './components/calculator/minus/minus.component';
import { MultiplicateComponent } from './components/calculator/multiplicate/multiplicate.component';
import { DivideComponent } from './components/calculator/divide/divide.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    EqualsComponent,
    PlusComponent,
    MinusComponent,
    MultiplicateComponent,
    DivideComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
