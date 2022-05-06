import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    BrowserModule,
    IntroRoutingModule
  ],
  providers: [],
  bootstrap: [IntroComponent]
})
export class AppModule { }
