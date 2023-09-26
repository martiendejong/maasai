import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-screen-invest',
  templateUrl: './screen-invest.component.html',
  styleUrls: ['../content.scss', './screen-invest.component.scss']
})
export class ScreenInvestComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location) {
    super(translate);
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
            alert("Thank you! We will contact you shortly.");
        } else {
            alert("Form submission failed. Please try to send an email to info@maasaiinvestments.online instead.");
        }
        window.location.href = '/';
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("Form submission failed. Please try to send an email to info@maasaiinvestments.online instead.");
      window.location.href = '/';
    });
  }

  onClosestToCenter(isClosest: boolean) {
    if (isClosest) {
      this.location.go('/invest');
    }
  }  
}