import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CartItemMiniService} from "../../../../../core/services/cart-item-mini.service";

@Component({
  selector: 'app-cart-item-mini',
  templateUrl: './cart-item-mini.component.html',
  styleUrls: ['./cart-item-mini.component.css']
})
export class CartItemMiniComponent {
  @Output() onClose = new EventEmitter<boolean>();

  constructor(private cartItemSv: CartItemMiniService) {
  }

  onCloseCart(status: boolean) {
    this.onClose.emit(false);
  }
}
