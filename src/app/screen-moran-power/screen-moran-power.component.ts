import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-moran-power',
  templateUrl: './screen-moran-power.component.html',
  styleUrls: ['../content.scss', './screen-moran-power.component.scss']
})
export class ScreenMoranPowerComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
