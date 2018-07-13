import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { Page1Component } from './page1/page1.component';
// import { Page2Component } from './page2/page2.component';
import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';

@NgModule({
  declarations: [
    AppComponent,
    // Page1Component,
    // Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Page1Module,
    Page2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
