import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenStakeholdercapitalismComponent } from './screen-stakeholdercapitalism.component';

describe('ScreenStakeholdercapitalismComponent', () => {
  let component: ScreenStakeholdercapitalismComponent;
  let fixture: ComponentFixture<ScreenStakeholdercapitalismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenStakeholdercapitalismComponent]
    });
    fixture = TestBed.createComponent(ScreenStakeholdercapitalismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
