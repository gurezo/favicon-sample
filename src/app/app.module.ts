import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';

@NgModule({
  declarations: [
    AppComponent,
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
