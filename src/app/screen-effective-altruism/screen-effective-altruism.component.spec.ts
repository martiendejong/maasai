import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEffectiveAltruismComponent } from './screen-effective-altruism.component';

describe('ScreenEffectiveAltruismComponent', () => {
  let component: ScreenEffectiveAltruismComponent;
  let fixture: ComponentFixture<ScreenEffectiveAltruismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenEffectiveAltruismComponent]
    });
    fixture = TestBed.createComponent(ScreenEffectiveAltruismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
