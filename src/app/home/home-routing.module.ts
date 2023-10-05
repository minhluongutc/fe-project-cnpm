import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginListComponent} from './components/login-list/login-list.component';
import {LoginComponent} from "./components/login-list/login/login.component";
import {RegisterComponent} from "./components/login-list/register/register.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login-list', component: LoginListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
