import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }
  home() {
    window.scrollTo(0, 0);    
  }
}
