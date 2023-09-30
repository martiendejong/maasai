import { Component, QueryList, ViewChildren } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { FittextDirective } from '../fittext.directive';

@Component({
  selector: 'app-screen-invest',
  templateUrl: './screen-invest.component.html',
  styleUrls: ['../content.scss', './screen-invest.component.scss']
})
export class ScreenInvestComponent extends BaseComponent {
  @ViewChildren(FittextDirective) fittextDirectives: QueryList<FittextDirective> | undefined;

  constructor(translate: TranslateService, private location: Location) {
    super(translate);
  }

  formResult = {
    success: false,
    errorMessage: '',
  };

  done() {
    this.formResult.success = false;
    this.formResult.errorMessage = '';
    setTimeout(() => this.fittextDirectives?.last.adjustFontSize(), 50);
  }
  error(error: string) {
    this.formResult.errorMessage = error;
    setTimeout(() => this.fittextDirectives?.last.adjustFontSize(), 50);
  }
  success() {
    this.formResult.success = true;
    setTimeout(() => this.fittextDirectives?.last.adjustFontSize(), 50);
  }


  amount: number = 100;
  submitForm(){
    var form = document.getElementById('contactForm') as HTMLFormElement;
    if(form == undefined) return;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData as any);

    const formUrl = 'https://maasaiinvestments.online/contact.php';
    // Send a POST request to the Google Form submission URL
    fetch(formUrl, {
        method: 'POST',
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(response => {
        if (response.status === 200) {
          this.success();
        } else {
          response.text().then(t => this.error(t));
        }
    })
    .catch(error => {
      this.error(error);
      console.error("Error submitting form:", error);
    });
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/invest');
    }
  }  
}