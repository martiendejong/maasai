import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { TranslateService } from '@ngx-translate/core';
import * as Aos from 'aos';
import { LocalizationService } from './localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(translate: TranslateService, localization: LocalizationService) {
    super(translate);
  }

  title = 'MaasaiInvestmentsWebsite';

  ngOnInit(): void {
    var me = this;
    
    Aos.init();

    window.addEventListener('resize', () => { me.handleAddressBarOnMobileDevice() });   
    if(me.hasSmallScreen() || me.isMobileBrowser()) {
      var topMenu = document.querySelector('#top-menu') as HTMLElement;
      topMenu.className += ' hidden';
      var mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
      mobileMenu.className += ' visible';
      var languageMenu = document.querySelector('.language-selector') as HTMLElement;
      languageMenu.className += ' mobile';
    }
  }
  isMobileBrowser() {
    return /Mobi|Android/i.test(navigator.userAgent);
  } 
  hasSmallScreen() {
    return (window.devicePixelRatio || 1) > 1.45;
  }
  handleAddressBarOnMobileDevice() {
    const elems = document.querySelectorAll('.content');
    var me = this;
    elems.forEach(function(elem: Element) {
      var htmlElem = elem as HTMLElement;
      if(window.innerHeight !== window.outerHeight && (me.hasSmallScreen() || me.isMobileBrowser())) {
        htmlElem.style.height = `${window.innerHeight}px`;
      } else {
        htmlElem.style.height = '';
      }
    });
  }
}
