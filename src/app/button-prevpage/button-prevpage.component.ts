import { Component, ElementRef } from '@angular/core';
import { ButtonNextPrev, ButtonNextpageOrPrevpageConfig } from './button-nextpage-or-prevpage-config';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button-prevpage',
  templateUrl: './button-prevpage.component.html',
  styleUrls: ['./button-nextpage-or-prevpage-component.scss', './button-prevpage.component.scss']
})
export class ButtonPrevpageComponent extends ButtonNextPrev {
  constructor(public el: ElementRef, translate: TranslateService) {
    super(translate);
  }
  override get navigationVisible() {
    var rect = this.el.nativeElement.getBoundingClientRect();
    return super.navigationVisible && rect.bottom < window.innerHeight * 1.5;
  }
}