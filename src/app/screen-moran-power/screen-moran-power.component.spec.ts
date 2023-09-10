import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMoranPoweryComponent } from './screen-moran-power.component';

describe('ScreenMoranPoweryComponent', () => {
  let component: ScreenMoranPoweryComponent;
  let fixture: ComponentFixture<ScreenMoranPoweryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenMoranPoweryComponent]
    });
    fixture = TestBed.createComponent(ScreenMoranPoweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
