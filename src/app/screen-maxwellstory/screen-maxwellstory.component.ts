import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-screen-maxwellstory',
  templateUrl: './screen-maxwellstory.component.html',
  styleUrls: ['../content.scss', './screen-maxwellstory.component.scss']
})
export class ScreenMaxwellstoryComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/natumi');
    }
  }
}
