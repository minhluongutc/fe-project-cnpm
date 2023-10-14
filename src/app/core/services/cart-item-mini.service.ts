import {Injectable} from "@angular/core";

@Injectable()
export class CartItemMiniService {
  showCartItem: boolean = false;

  onShow() {
    this.showCartItem = true;
  }

  onClose() {
    this.showCartItem = false;
  }
}
