import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-stakeholdercapitalism',
  templateUrl: './screen-stakeholdercapitalism.component.html',
  styleUrls: ['../content.scss', './screen-stakeholdercapitalism.component.scss']
})
export class ScreenStakeholdercapitalismComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
