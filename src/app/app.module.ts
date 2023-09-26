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
import { ScreenStakeholdercapitalismComponent } from './screen-stakeholdercapitalism/screen-stakeholdercapitalism.component';
import { ScreenEffectivealtruismComponent } from './screen-effectivealtruism/screen-effectivealtruism.component';
import { ScreenMaxwellstoryComponent } from './screen-maxwellstory/screen-maxwellstory.component';
import { ScreenBedandbreakfastPitchComponent } from './screen-bedandbreakfast-pitch/screen-bedandbreakfast-pitch.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ClosestToCenterDirective } from './closest-to-center.directive';

// Create a loader for translations
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

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
    ScreenStakeholdercapitalismComponent,
    ScreenEffectivealtruismComponent,
    ScreenMaxwellstoryComponent,
    ScreenBedandbreakfastPitchComponent,
    LanguageSelectorComponent,
    ClosestToCenterDirective
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ShareButtonsModule,
    ShareIconsModule
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }