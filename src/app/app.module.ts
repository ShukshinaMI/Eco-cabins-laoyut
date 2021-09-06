import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EcoCabinsComponent } from './eco-cabins/eco-cabins.component';

@NgModule({
  declarations: [
    AppComponent,
    EcoCabinsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
