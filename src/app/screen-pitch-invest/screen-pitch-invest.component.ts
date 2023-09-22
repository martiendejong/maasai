import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-pitch-invest',
  templateUrl: './screen-pitch-invest.component.html',
  styleUrls: ['../content.scss', './screen-pitch-invest.component.scss']
})
export class ScreenPitchInvestComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
