import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginListComponent} from './components/login-list/login-list.component';
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {WatchesComponent} from "./components/watches/watches.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login-list', component: LoginListComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'watches', component: WatchesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
