import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-screen-pitch-goat',
  templateUrl: './screen-pitch-goat.component.html',
  styleUrls: ['../content.scss', './screen-pitch-goat.component.scss']
})
export class ScreenPitchGoatComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
}
