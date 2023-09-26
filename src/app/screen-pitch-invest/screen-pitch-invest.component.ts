import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-screen-pitch-invest',
  templateUrl: './screen-pitch-invest.component.html',
  styleUrls: ['../content.scss', './screen-pitch-invest.component.scss']
})
export class ScreenPitchInvestComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location, 
    private titleService: Title, private metaService: Meta) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/');
      this.setMeta();
    }
  }

  setMeta() {
    this.titleService.setTitle('Your Page Title');
    this.metaService.updateTag({ name: 'description', content: 'Your page description' });
    this.metaService.updateTag({ property: 'og:title', content: 'Your Open Graph title' });
    this.metaService.updateTag({ property: 'og:description', content: 'Your Open Graph description' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/goat_wide.png' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Your Twitter Card title' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Your Twitter Card description' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'URL to your image' });  
  }
}