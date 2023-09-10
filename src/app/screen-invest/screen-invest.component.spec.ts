import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenInvestComponent } from './screen-invest.component';

describe('ScreenInvestComponent', () => {
  let component: ScreenInvestComponent;
  let fixture: ComponentFixture<ScreenInvestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenInvestComponent]
    });
    fixture = TestBed.createComponent(ScreenInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
