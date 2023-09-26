import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-screen-nkumum-solar-story',
  templateUrl: './screen-nkumum-solar-story.component.html',
  styleUrls: ['../content.scss', './screen-nkumum-solar-story.component.scss']
})
export class ScreenNkumumSolarStoryComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/nkumum');
    }
  }
}
