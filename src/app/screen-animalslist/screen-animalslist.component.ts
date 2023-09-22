import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-animalslist',
  templateUrl: './screen-animalslist.component.html',
  styleUrls: ['../content.scss', './screen-animalslist.component.scss']
})
export class ScreenAnimalslistComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
