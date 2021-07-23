import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  /*Route instance - Map Component ->Path */
{path:'home',component:HomeComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
]},
{path:'', redirectTo:'/home', pathMatch:'full'},
{path:'main/:username', component:MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
