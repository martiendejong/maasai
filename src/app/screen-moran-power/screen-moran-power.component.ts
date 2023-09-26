import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-screen-moran-power',
  templateUrl: './screen-moran-power.component.html',
  styleUrls: ['../content.scss', './screen-moran-power.component.scss']
})
export class ScreenMoranPowerComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/moranpower');
    }
  }
}