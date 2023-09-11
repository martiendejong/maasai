import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBedandbreakfastPitchComponent } from './screen-bedandbreakfast-pitch.component';

describe('ScreenBedandbreakfastPitchComponent', () => {
  let component: ScreenBedandbreakfastPitchComponent;
  let fixture: ComponentFixture<ScreenBedandbreakfastPitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenBedandbreakfastPitchComponent]
    });
    fixture = TestBed.createComponent(ScreenBedandbreakfastPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
