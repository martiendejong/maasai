import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSafariPitchComponent } from './screen-safari-pitch.component';

describe('ScreenSafariPitchComponent', () => {
  let component: ScreenSafariPitchComponent;
  let fixture: ComponentFixture<ScreenSafariPitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenSafariPitchComponent]
    });
    fixture = TestBed.createComponent(ScreenSafariPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
