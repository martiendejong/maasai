import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEffectivealtruismComponent } from './screen-effectivealtruism.component';

describe('ScreenEffectivealtruismComponent', () => {
  let component: ScreenEffectivealtruismComponent;
  let fixture: ComponentFixture<ScreenEffectivealtruismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenEffectivealtruismComponent]
    });
    fixture = TestBed.createComponent(ScreenEffectivealtruismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
