import {NgModule} from "@angular/core";
import {CartItemMiniService} from "./services/cart-item-mini.service";
import {WatchService} from "./services/watch.service";

@NgModule({
  providers: [
    CartItemMiniService,
    WatchService
  ]
})
export class CoreModule {
}
