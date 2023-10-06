import {NgModule} from '@angular/core';
import {ScrollDirective} from './layout/directives/scroll.directive';
import {NgIf, UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [ScrollDirective],
  imports: [
    UpperCasePipe,
    RouterLink,
    NgIf
  ],
  exports: [ScrollDirective],
})
export class SharedModule {
}
