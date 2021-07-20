import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HealthCareModule} from '../healthcare/healthcare.module'
import { BMICalculatorComponent } from 'src/healthcare/components/bmiCalculator/bmiCalculator.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HealthCareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
