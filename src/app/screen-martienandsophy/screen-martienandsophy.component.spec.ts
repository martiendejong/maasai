import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMartienandsophyComponent } from './screen-martienandsophy.component';

describe('ScreenMartienandsophyComponent', () => {
  let component: ScreenMartienandsophyComponent;
  let fixture: ComponentFixture<ScreenMartienandsophyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenMartienandsophyComponent]
    });
    fixture = TestBed.createComponent(ScreenMartienandsophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
