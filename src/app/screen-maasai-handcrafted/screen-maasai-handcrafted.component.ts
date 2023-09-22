import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-maasai-handcrafted',
  templateUrl: './screen-maasai-handcrafted.component.html',
  styleUrls: ['../content.scss', './screen-maasai-handcrafted.component.scss']
})
export class ScreenMaasaiHandcraftedComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }

}
