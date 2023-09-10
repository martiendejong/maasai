import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSophyStoryComponent } from './screen-sophy-story.component';

describe('ScreenSophyStoryComponent', () => {
  let component: ScreenSophyStoryComponent;
  let fixture: ComponentFixture<ScreenSophyStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenSophyStoryComponent]
    });
    fixture = TestBed.createComponent(ScreenSophyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
