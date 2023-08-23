import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPitchInvestComponent } from './screen-pitch-invest.component';

describe('ScreenPitchInvestComponent', () => {
  let component: ScreenPitchInvestComponent;
  let fixture: ComponentFixture<ScreenPitchInvestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenPitchInvestComponent]
    });
    fixture = TestBed.createComponent(ScreenPitchInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
