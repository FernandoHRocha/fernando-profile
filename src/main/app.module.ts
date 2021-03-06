import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactComponent } from 'src/modules/panels/contact/contact.component';
import { HeaderComponent } from 'src/modules/bars/header/header.component';
import { SideComponent } from 'src/modules/bars/side/side.component';
import { IntroComponent } from 'src/modules/panels/intro/intro.component';
import { ProjectComponent } from 'src/modules/panels/project/project.component';
import { CurriculumComponent } from 'src/modules/print/curriculum.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    ProjectComponent,
    IntroComponent,
    ContactComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
