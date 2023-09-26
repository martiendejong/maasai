import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";
import { Meta, Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-screen-pitch-goat',
  templateUrl: './screen-pitch-goat.component.html',
  styleUrls: ['../content.scss', './screen-pitch-goat.component.scss']
})
export class ScreenPitchGoatComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location, 
    private titleService: Title, private metaService: Meta) {
    super(translate);
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/goats');
      this.setMeta();
    }
  }

  setMeta() {

    forkJoin([
      this.translate.get('pitchgoat-h4-1'), 
      this.translate.get('pitchgoat-p-1')
    ])
    .subscribe(data =>
    {
      var title = data[0];
      var description = data[1];

      this.titleService.setTitle(title);
      this.metaService.updateTag({ property: 'og:image', content: 'assets/goat_wide.png' });
      this.metaService.updateTag({ property: 'og:url', content: 'maasaiinvestments.online/goats' });
      this.metaService.updateTag({ name: 'twitter:image', content: 'maasaiinvestments.online/goats' });          
  
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ name: 'twitter:description', content: description });
    });

    //var title = this.translate.get('pitchgoat-h4-1');
    //var description = this.translate.get('pitchgoat-p-1');



    
  }
}