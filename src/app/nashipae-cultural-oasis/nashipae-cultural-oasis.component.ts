import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-nashipae-cultural-oasis',
  templateUrl: './nashipae-cultural-oasis.component.html',
  styleUrls: ['../content.scss', './nashipae-cultural-oasis.component.scss']
})
export class NashipaeCulturalOasisComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/nashipaeculturaloasis');
    }
  }
}
