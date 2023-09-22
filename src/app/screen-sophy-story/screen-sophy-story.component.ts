import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-sophy-story',
  templateUrl: './screen-sophy-story.component.html',
  styleUrls: ['../content.scss', './screen-sophy-story.component.scss']
})
export class ScreenSophyStoryComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
