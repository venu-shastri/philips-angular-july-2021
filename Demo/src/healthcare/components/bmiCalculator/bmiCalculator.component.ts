import { Component } from "@angular/core";

@Component({
  templateUrl:'./bmiCalculator.component.html',
  selector:"bmi-calculator"

})
export  class BMICalculatorComponent{

  height:any;
  bmiResult:number;
  constructor(){
    this.height=0;
    this.bmiResult=0;
  }
  setHeight(value:Number){
    console.log(`Height Value ${value}`);
    this.height=value;

  }
  calculateBmi(){
      console.log("Button clicked");
  }

}
