import {NgModule} from '@angular/core';
import {ScrollDirective} from './layout/directives/scroll.directive';
import {HeaderMainComponent} from "./layout/header/header-main/header-main.component";
import {UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {HeaderMainNavComponent} from "./layout/header/header-main-nav/header-main-nav.component";

@NgModule({
  declarations: [ScrollDirective, HeaderMainComponent, HeaderMainNavComponent],
  imports: [
    UpperCasePipe,
    RouterLink
  ],
  exports: [ScrollDirective, HeaderMainComponent, HeaderMainNavComponent],
})
export class ShareModule {
}
