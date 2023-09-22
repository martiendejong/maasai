import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-effectivealtruism',
  templateUrl: './screen-effectivealtruism.component.html',
  styleUrls: ['../content.scss', './screen-effectivealtruism.component.scss']
})
export class ScreenEffectivealtruismComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
