import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

import { IntroComponent } from '../Shared/Panels/intro/intro.component';
import { ProjectComponent } from '../Shared/Panels/project/project.component';
import { CurriculumComponent } from '../Shared/Curriculum/curriculum.component';
import { SideComponent } from '../Shared/Bars/side/side.component';
import { HeaderComponent } from '../Shared/Bars/header/header.component';
import { ContactModule } from '../Shared/Panels/contact/contact.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DatabaseHeroComponent } from '../Shared/Panels/hero-sections/database/database-hero.component';
import { BackendHeroComponent } from '../Shared/Panels/hero-sections/backend/backend-hero.component';
import { frontendHeroComponent } from '../Shared/Panels/hero-sections/frontend/frontend-hero.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    CurriculumComponent,
    ProjectComponent,
    HeaderComponent,
    SideComponent,
    DatabaseHeroComponent,
    BackendHeroComponent,
    frontendHeroComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
