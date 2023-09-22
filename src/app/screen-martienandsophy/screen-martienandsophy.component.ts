import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-martienandsophy',
  templateUrl: './screen-martienandsophy.component.html',
  styleUrls: ['../content.scss', './screen-martienandsophy.component.scss']
})
export class ScreenMartienandsophyComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
