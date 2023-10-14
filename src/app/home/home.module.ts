import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {LoginListComponent} from './components/login-list/login-list.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from "./home-routing.module";
import {LoginComponent} from "./components/login-list/login/login.component";
import {RegisterComponent} from "./components/login-list/register/register.component";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {HomeSharedModule} from "./shared/home-shared.module";
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {WatchesComponent} from './components/watches/watches.component';
import {WatchesListComponent} from './components/watches/watches-list/watches-list.component';
import {WatchesFilterListComponent} from './components/watches/watches-filter-list/watches-filter-list.component';
import {WatchItemComponent} from './components/watches/watches-list/watch-item/watch-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginListComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    WatchesComponent,
    WatchesListComponent,
    WatchesFilterListComponent,
    WatchItemComponent
  ],
  imports: [RouterModule, NgIf, NgForOf, UpperCasePipe, HomeSharedModule],
  exports: [
    HomeComponent,
    HomeRoutingModule,
    ShoppingCartComponent,
    WatchesComponent
  ]
})
export class HomeModule {
}
