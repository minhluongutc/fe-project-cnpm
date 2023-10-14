import {Component, OnInit} from '@angular/core';
import {CartItemMiniService} from "./core/services/cart-item-mini.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isShowCart: boolean = false;

  constructor(private cartItemSv: CartItemMiniService) {
  }

  ngOnInit(): void {
    this.isShowCart = this.cartItemSv.showCartItem;
  }
}
