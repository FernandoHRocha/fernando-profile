import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    EmailRoutingModule
  ],
  providers: [],
  bootstrap: [EmailComponent]
})
export class AppModule { }
