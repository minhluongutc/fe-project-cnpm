import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './shared/share.module';
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ShareModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
