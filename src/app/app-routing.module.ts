import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home/home.component";
import {LoginListComponent} from "./pages/home/login-list/login-list.component";
import {ShoppingCartComponent} from "./pages/home/shopping-cart/shopping-cart.component";
import {HomeAdminComponent} from "./pages/admin/home-admin/home-admin.component";

const appRouter: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginListComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {
    path: 'watches', loadChildren: () =>
      import('./pages/home/watches/watches.module').then((m) => m.WatchesModule)
  },
  {path: 'admin', component: HomeAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
