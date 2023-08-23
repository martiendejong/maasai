import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      state('true', style({ opacity: 1, zIndex: 100000 })),
      state('false', style({ opacity: 0, zIndex: -100000 })),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-in'))
    ])
  ]
})
export class MenuComponent {
  public fullscreenMenuVisible = false;
  hideMenu() {
    this.fullscreenMenuVisible = false;
  }
}