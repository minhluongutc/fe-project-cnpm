import {NgModule} from "@angular/core";
import {ShoppingCartService} from "./services/shopping-cart.service";
import {WatchService} from "./services/watch.service";
import {CommonModule, CurrencyPipe, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {AdminHomeService} from "./services/admin-home.service";

@NgModule({
  providers: [
    ShoppingCartService,
    WatchService,
    AdminHomeService
  ],
  imports: [
    CommonModule,
    UpperCasePipe,
    CurrencyPipe,
    NgOptimizedImage,
    SharedModule,
  ]
})
export class CoreModule {
}
