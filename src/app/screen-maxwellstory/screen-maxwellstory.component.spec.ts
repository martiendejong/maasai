import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMaxwellstoryComponent } from './screen-maxwellstory.component';

describe('ScreenMaxwellstoryComponent', () => {
  let component: ScreenMaxwellstoryComponent;
  let fixture: ComponentFixture<ScreenMaxwellstoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenMaxwellstoryComponent]
    });
    fixture = TestBed.createComponent(ScreenMaxwellstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
