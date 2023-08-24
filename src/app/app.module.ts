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
    TitleComponent
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
