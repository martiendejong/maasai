import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MaasaiInvestmentsWebsite';

  ngOnInit(): void {

    var me = this;
    window.addEventListener('resize', () => { me.handleAddressBarOnMobileDevice() });   
    if(me.hasSmallScreen() || me.isMobileBrowser()) {
      var topMenu = document.querySelector('#top-menu') as HTMLElement;
      topMenu.className += 'hidden';
      var mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
      mobileMenu.className += 'visible';
    }
  }
  isMobileBrowser() {
    return /Mobi|Android/i.test(navigator.userAgent);
  } 
  hasSmallScreen() {
    return (window.devicePixelRatio || 1) > 1.45;
  }
  handleAddressBarOnMobileDevice() {
    const elems = document.querySelectorAll(".content");
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
