import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeBannerComponent } from './Components/home-banner/home-banner.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { SectionHeadingComponent } from './Components/section-heading/section-heading.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { MyProjectsComponent } from './Components/my-projects/my-projects.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { ServicesComponent } from './Components/my-services/my-services.component';
import { CopyrightComponent } from './Components/copyright/copyright.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    NavBarComponent,
    AboutMeComponent,
    SectionHeadingComponent,
    SkillsComponent,
    MyProjectsComponent,
    ContactMeComponent,
    CopyrightComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
