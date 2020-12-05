import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Comp2Component } from './comp2/comp2.component';
import { ReversePipe } from './reverse.pipe';
import {RPipe} from './r.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Comp2Component,
    ReversePipe,
    RPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
