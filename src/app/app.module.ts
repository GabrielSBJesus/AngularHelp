import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { BodyBarComponent } from './body-bar/body-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    BodyBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
