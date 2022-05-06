import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EmailComponent } from 'src/modules/contact/email.component';
import { HeaderComponent } from 'src/modules/bars/header/header.component';
import { SideComponent } from 'src/modules/bars/side/side.component';
import { IntroComponent } from 'src/modules/panels/intro/intro.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    IntroComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
