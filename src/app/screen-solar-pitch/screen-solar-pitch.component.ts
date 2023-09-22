import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-solar-pitch',
  templateUrl: './screen-solar-pitch.component.html',
  styleUrls: ['../content.scss', './screen-solar-pitch.component.scss']
})
export class ScreenSolarPitchComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
