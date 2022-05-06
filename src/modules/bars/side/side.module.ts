import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SideRoutingModule } from './side-routing.module';
import { SideComponent } from './side.component';

@NgModule({
  declarations: [
    SideComponent
  ],
  imports: [
    BrowserModule,
    SideRoutingModule
  ],
  providers: [],
  bootstrap: [SideComponent]
})
export class AppModule { }
