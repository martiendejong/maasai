import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-safari-pitch',
  templateUrl: './screen-safari-pitch.component.html',
  styleUrls: ['../content.scss', './screen-safari-pitch.component.scss']
})
export class ScreenSafariPitchComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}