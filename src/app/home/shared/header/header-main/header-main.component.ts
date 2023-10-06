import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent {
  showItemCart: boolean = false;

  onShowItemCart() {
    this.showItemCart = !this.showItemCart;//true
    console.log(this.showItemCart)
  }
}
