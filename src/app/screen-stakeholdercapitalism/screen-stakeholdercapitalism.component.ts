import { Component, ElementRef, HostListener } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-screen-stakeholdercapitalism',
  templateUrl: './screen-stakeholdercapitalism.component.html',
  styleUrls: ['../content.scss', './screen-stakeholdercapitalism.component.scss']
})
export class ScreenStakeholdercapitalismComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/stakeholdercapitalism');
    }
  }
}
