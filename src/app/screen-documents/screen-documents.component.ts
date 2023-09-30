import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '../base/base.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-screen-documents',
  templateUrl: './screen-documents.component.html',
  styleUrls: ['../content.scss', './screen-documents.component.scss']
})
export class ScreenDocumentsComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/documents');
    }
  }

}
