import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  showFlagOptions = false;

  // Define an array of language objects
constructor(public localization: LocalizationService, public translate: TranslateService) {

}
  ngOnInit(): void {
  }

  toggleFlagOptions(): void {
    this.showFlagOptions = !this.showFlagOptions;
  }

  selectLanguage(language: string): void {
    this.showFlagOptions = false; // Hide the flag options
    this.localization.setLanguage(language);
  }
}
