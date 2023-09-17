import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMoranPowerComponent } from './screen-moran-power.component';

describe('ScreenMoranPoweryComponent', () => {
  let component: ScreenMoranPowerComponent;
  let fixture: ComponentFixture<ScreenMoranPowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenMoranPowerComponent]
    });
    fixture = TestBed.createComponent(ScreenMoranPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
