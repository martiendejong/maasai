import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSolarPitchComponent } from './screen-solar-pitch.component';

describe('ScreenSolarPitchComponent', () => {
  let component: ScreenSolarPitchComponent;
  let fixture: ComponentFixture<ScreenSolarPitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenSolarPitchComponent]
    });
    fixture = TestBed.createComponent(ScreenSolarPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
