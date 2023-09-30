import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {LoginListComponent} from './components/login-list/login-list.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent, LoginListComponent],
  imports: [RouterModule],
  exports: [
    HomeComponent,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
