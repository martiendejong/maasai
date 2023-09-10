import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './base/base.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonPrevpageComponent } from './button-prevpage/button-prevpage.component';
import { ButtonNextpageComponent } from './button-nextpage/button-nextpage.component';
import { MenuComponent } from './menu/menu.component';
import { ScreenPitchInvestComponent } from './screen-pitch-invest/screen-pitch-invest.component';
import { ScreenPitchGoatComponent } from './screen-pitch-goat/screen-pitch-goat.component';
import { ScreenMartienandsophyComponent } from './screen-martienandsophy/screen-martienandsophy.component';

import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';
import { ScreenInvestComponent } from './screen-invest/screen-invest.component';
import { ScreenAnimalslistComponent } from './screen-animalslist/screen-animalslist.component';
import { ScreenAnimaldetailsComponent } from './screen-animaldetails/screen-animaldetails.component';
import { FittextDirective } from './fittext.directive';
import { ScreenSophyStoryComponent } from './screen-sophy-story/screen-sophy-story.component';
import { ScreenNkumumSolarStoryComponent } from './screen-nkumum-solar-story/screen-nkumum-solar-story.component';
import { ScreenMoranPowerComponent } from './screen-moran-power/screen-moran-power.component';
import { ScreenMaasaiHandcraftedComponent } from './screen-maasai-handcrafted/screen-maasai-handcrafted.component';
import { ScreenSafariPitchComponent } from './screen-safari-pitch/screen-safari-pitch.component';
import { ScreenSolarPitchComponent } from './screen-solar-pitch/screen-solar-pitch.component';
import { ScreenRealestatePitchComponent } from './screen-realestate-pitch/screen-realestate-pitch.component';
import { ScreenEffectiveAltruismComponent } from './screen-effective-altruism/screen-effective-altruism.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BaseComponent,
    ButtonPrevpageComponent,
    ButtonNextpageComponent,
    MenuComponent,
    ScreenPitchInvestComponent,
    ScreenPitchGoatComponent,
    ScreenMartienandsophyComponent,
    LogoComponent,
    TitleComponent,
    ScreenInvestComponent,
    ScreenAnimalslistComponent,
    ScreenAnimaldetailsComponent,
    FittextDirective,
    ScreenSophyStoryComponent,
    ScreenNkumumSolarStoryComponent,
    ScreenMoranPowerComponent,
    ScreenMaasaiHandcraftedComponent,
    ScreenSafariPitchComponent,
    ScreenSolarPitchComponent,
    ScreenRealestatePitchComponent,
    ScreenEffectiveAltruismComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
