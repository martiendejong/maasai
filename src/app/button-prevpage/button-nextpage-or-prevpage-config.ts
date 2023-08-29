import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, ElementRef, Input } from "@angular/core";

export class ButtonNextpageOrPrevpageConfig {
    static arrowsVisible = false;
    static navigationVisible = true;
    static arrowsTimer: any;
    static delayBeforeArrowsAppear = 10000;
    static setArrowsTimer() {
        ButtonNextpageOrPrevpageConfig.arrowsTimer = setTimeout(() => { ButtonNextpageOrPrevpageConfig.arrowsVisible = true; }, ButtonNextpageOrPrevpageConfig.delayBeforeArrowsAppear);
    }
    static unsetArrowsTimer() {
        if(ButtonNextpageOrPrevpageConfig.arrowsTimer !== undefined) {
            clearTimeout(ButtonNextpageOrPrevpageConfig.arrowsTimer); 
        }       
    }
    static resetArrows() {
      ButtonNextpageOrPrevpageConfig.arrowsVisible = false;
      ButtonNextpageOrPrevpageConfig.unsetArrowsTimer();
      ButtonNextpageOrPrevpageConfig.setArrowsTimer();
    }  
  }

  @Component({
    selector: 'app-base',
    template: `
      <p>
        base works!
      </p>
    `,
    animations: [
      trigger('fadeInAnimation', [
        state('true', style({ opacity: 1 })),
        state('false', style({ opacity: 0 })),
        transition('false => true', animate('3000ms ease-in'))
      ])
    ]
  })
  export class ButtonNextPrev {
    @Input() to: string = '';    
    get navigationVisible() {
        return ButtonNextpageOrPrevpageConfig.navigationVisible;
    }
    get arrowsVisible() {
        return ButtonNextpageOrPrevpageConfig.arrowsVisible;
    }
    get arrowsTimer() {
        return ButtonNextpageOrPrevpageConfig.arrowsTimer;
    }
    resetArrows() {
        ButtonNextpageOrPrevpageConfig.resetArrows();
    }
    ngOnInit() {
        ButtonNextpageOrPrevpageConfig.setArrowsTimer();
        var me = this;
        window.addEventListener('scroll', () => { me.scroll() });   
    }
    scroll() {
        var viewHeight = window.innerHeight;
        ButtonNextpageOrPrevpageConfig.unsetArrowsTimer();
        ButtonNextpageOrPrevpageConfig.arrowsVisible = false;
        ButtonNextpageOrPrevpageConfig.navigationVisible = false;        
        if((window.scrollY + (viewHeight *.2)) % viewHeight < viewHeight * .4) {
            ButtonNextpageOrPrevpageConfig.setArrowsTimer();
            ButtonNextpageOrPrevpageConfig.navigationVisible = true;
        }
    }
}