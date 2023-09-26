import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-screen-pitch-invest',
  templateUrl: './screen-pitch-invest.component.html',
  styleUrls: ['../content.scss', './screen-pitch-invest.component.scss']
})
export class ScreenPitchInvestComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location, 
    private titleService: Title, private metaService: Meta) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/');
    }
  }
}