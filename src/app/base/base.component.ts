import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  constructor(private translate: TranslateService) {}

  // You can change the active language
  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
