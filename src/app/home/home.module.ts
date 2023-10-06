import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {LoginListComponent} from './components/login-list/login-list.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from "./home-routing.module";
import {LoginComponent} from "./components/login-list/login/login.component";
import {RegisterComponent} from "./components/login-list/register/register.component";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {HomeSharedModule} from "./shared/home-shared.module";

@NgModule({
  declarations: [HomeComponent, LoginListComponent, LoginComponent, RegisterComponent],
  imports: [RouterModule, NgIf, NgForOf, UpperCasePipe, HomeSharedModule],
  exports: [
    HomeComponent,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
