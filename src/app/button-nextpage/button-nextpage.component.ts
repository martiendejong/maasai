import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef } from '@angular/core';
import { ButtonNextPrev, ButtonNextpageOrPrevpageConfig } from '../button-prevpage/button-nextpage-or-prevpage-config';

@Component({
  selector: 'app-button-nextpage',
  templateUrl: './button-nextpage.component.html',
  styleUrls: ['../button-prevpage/button-nextpage-or-prevpage-component.scss', './button-nextpage.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false => true', animate('3000ms ease-in'))
    ])
  ]
})
export class ButtonNextpageComponent extends ButtonNextPrev {
  constructor(public el: ElementRef) {
    super();
  }
  override get navigationVisible() {    
      var rect = this.el.nativeElement.getBoundingClientRect();
      return super.navigationVisible && rect.bottom > window.innerHeight * 0.5;
  }
}