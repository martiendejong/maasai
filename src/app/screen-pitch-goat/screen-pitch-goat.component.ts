import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-screen-pitch-goat',
  templateUrl: './screen-pitch-goat.component.html',
  styleUrls: ['../content.scss', './screen-pitch-goat.component.scss']
})
export class ScreenPitchGoatComponent extends BaseComponent {
  constructor(translate: TranslateService) {
    super(translate);
  }
}