import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-bedandbreakfast-pitch',
  templateUrl: './screen-bedandbreakfast-pitch.component.html',
  styleUrls: ['./screen-bedandbreakfast-pitch.component.scss']
})
export class ScreenBedandbreakfastPitchComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
