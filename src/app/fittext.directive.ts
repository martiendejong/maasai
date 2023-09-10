import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[fittext]'
})
export class FittextDirective {

  constructor(private el: ElementRef) {}

  adjustFontSize() {
    const container = this.el.nativeElement as HTMLElement;
    const text = container.children[0] as HTMLElement;
    const elements = text.querySelectorAll('*');
    //const container = document.getElementById('textContainer') as HTMLElement;
    //const text = document.getElementById('fitText') as HTMLElement;
    
    let fontSize = 1;
    text.style.fontSize = fontSize + 'px';
    elements.forEach(input => (input as HTMLElement).style.fontSize = fontSize + 'px');
    
    var iterations = 0;
    // make text bigger until it reaches or overflows the container horizontally or vertically
    while (this.textFitsContainer(text, container) && iterations < 100) {
      fontSize++;
      text.style.fontSize = fontSize + 'px';
      elements.forEach(input => (input as HTMLElement).style.fontSize = fontSize + 'px');
      iterations++;
    }
    // make text smaller until it fits horizontally and vertically
    while (!this.textFitsContainer(text, container) && iterations < 100) {
      fontSize--;
      text.style.fontSize = fontSize + 'px';
      elements.forEach(input => (input as HTMLElement).style.fontSize = fontSize + 'px');
      iterations++;
    }
  }
  
  textFitsContainer(text: HTMLElement, container: HTMLElement) {
    const containerComputedStyle = window.getComputedStyle(container);
    const containerWidth = container.clientWidth - parseFloat(containerComputedStyle.paddingLeft) - parseFloat(containerComputedStyle.paddingRight);
    const containerHeight = container.clientHeight - parseFloat(containerComputedStyle.paddingTop) - parseFloat(containerComputedStyle.paddingBottom);
    
    const textComputedStyle = window.getComputedStyle(text);
    const textMargin = parseFloat(textComputedStyle.marginTop) + parseFloat(textComputedStyle.marginBottom); 
    const textPadding = parseFloat(textComputedStyle.paddingTop) + parseFloat(textComputedStyle.paddingBottom); 
    
    return text.scrollWidth <= containerWidth && text.scrollHeight + textMargin + textPadding <= containerHeight;
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustFontSize();
  }

  ngAfterViewInit() {
    this.adjustFontSize();
    var me = this;
    setTimeout(() => me.adjustFontSize(), 10);
    setTimeout(() => me.adjustFontSize(), 100);
    setTimeout(() => me.adjustFontSize(), 1000);
    setTimeout(() => me.adjustFontSize(), 10000);
  }
}