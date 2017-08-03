import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPulsarModule } from 'ngx-pulsar';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    NgxPulsarModule.forRoot(),
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
