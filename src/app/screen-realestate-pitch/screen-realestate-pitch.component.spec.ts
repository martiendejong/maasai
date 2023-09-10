import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRealestatePitchComponent } from './screen-realestate-pitch.component';

describe('ScreenRealestatePitchComponent', () => {
  let component: ScreenRealestatePitchComponent;
  let fixture: ComponentFixture<ScreenRealestatePitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenRealestatePitchComponent]
    });
    fixture = TestBed.createComponent(ScreenRealestatePitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
