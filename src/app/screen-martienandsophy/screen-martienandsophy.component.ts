import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-screen-martienandsophy',
  templateUrl: './screen-martienandsophy.component.html',
  styleUrls: ['../content.scss', './screen-martienandsophy.component.scss']
})
export class ScreenMartienandsophyComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/about');
    }
  }
}
