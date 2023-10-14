import {Component,} from "@angular/core";
import {CartItemMiniService} from "../../../../core/services/cart-item-mini.service";

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent {
  showItemCart: boolean = false;

  constructor(private cartItemSv: CartItemMiniService) {
  }

  onShowCartItem() {
    this.cartItemSv.onShow();
    this.showItemCart = this.cartItemSv.showCartItem;
  }

  onCloseCartItem(status: boolean) {
    this.cartItemSv.onClose();
    this.showItemCart = this.cartItemSv.showCartItem;
  }
}
