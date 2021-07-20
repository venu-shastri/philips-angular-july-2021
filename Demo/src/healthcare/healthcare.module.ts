import { NgModule } from "@angular/core";
import {BMICalculatorComponent} from "./components/bmiCalculator/bmiCalculator.component"
//require();
@NgModule({
  declarations:[BMICalculatorComponent],//List Of Components
  exports:[BMICalculatorComponent], //Public Content
  imports:[]//Dependency Module List

})
export class  HealthCareModule{

}
//module.exports
