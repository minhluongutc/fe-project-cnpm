import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "./core/services/shopping-cart.service";
import {ActivatedRoute} from "@angular/router";
import {AdminHomeService} from "./core/services/admin-home.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isShowCart: boolean = false;
  homeMode: boolean = true;

  constructor(private shoppingCartSV: ShoppingCartService, public adminHomeSV: AdminHomeService) {
  }

  ngOnInit(): void {
    this.isShowCart = this.shoppingCartSV.showCartItem;
  }
}
