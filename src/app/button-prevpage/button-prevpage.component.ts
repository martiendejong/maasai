import { Component, ElementRef } from '@angular/core';
import { ButtonNextPrev, ButtonNextpageOrPrevpageConfig } from './button-nextpage-or-prevpage-config';

@Component({
  selector: 'app-button-prevpage',
  templateUrl: './button-prevpage.component.html',
  styleUrls: ['./button-nextpage-or-prevpage-component.scss', './button-prevpage.component.scss']
})
export class ButtonPrevpageComponent extends ButtonNextPrev {
  constructor(public el: ElementRef) {
    super();
  }
  override get navigationVisible() {
    //return super.navigationVisible;
    var rect = this.el.nativeElement.getBoundingClientRect();
    return super.navigationVisible && rect.bottom < window.innerHeight * 1.5;
  }
}