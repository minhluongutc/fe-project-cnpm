import {NgModule} from "@angular/core";
import {CartItemMiniComponent} from "./header/cart-item-mini/cart-item-mini.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderMainComponent} from "./header/header-main/header-main.component";
import {HeaderMainNavComponent} from "./header/header-main-nav/header-main-nav.component";
import {HeaderComponent} from "./header/header.component";
import {RouterLink} from "@angular/router";
import {NgIf, UpperCasePipe} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [CartItemMiniComponent, FooterComponent, HeaderMainComponent, HeaderMainNavComponent, HeaderComponent],
  exports: [CartItemMiniComponent, FooterComponent, HeaderComponent],
  imports: [
    RouterLink,
    UpperCasePipe,
    NgIf,
    SharedModule
  ]
})
export class HomeSharedModule {
}
