import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeBannerComponent } from './Components/home-banner/home-banner.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { SectionHeadingComponent } from './Components/section-heading/section-heading.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { MyProjectsComponent } from './Components/my-projects/my-projects.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { CopyrightComponent } from './Components/copyright/copyright.component';

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
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
