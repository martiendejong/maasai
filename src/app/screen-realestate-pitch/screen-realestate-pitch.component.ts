import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-realestate-pitch',
  templateUrl: './screen-realestate-pitch.component.html',
  styleUrls: ['../content.scss', './screen-realestate-pitch.component.scss']
})
export class ScreenRealestatePitchComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
