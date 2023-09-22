import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-animaldetails',
  templateUrl: './screen-animaldetails.component.html',
  styleUrls: ['../content.scss', './screen-animaldetails.component.scss']
})
export class ScreenAnimaldetailsComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
