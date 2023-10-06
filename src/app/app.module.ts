import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from "./home/home.module";
import {HomeSharedModule} from "./home/shared/home-shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeSharedModule, HomeModule, HomeSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
