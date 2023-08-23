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
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 1000);    
  }

}
