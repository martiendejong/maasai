import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNkumumSolarStoryComponent } from './screen-nkumum-solar-story.component';

describe('ScreenNkumumSolarStoryComponent', () => {
  let component: ScreenNkumumSolarStoryComponent;
  let fixture: ComponentFixture<ScreenNkumumSolarStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenNkumumSolarStoryComponent]
    });
    fixture = TestBed.createComponent(ScreenNkumumSolarStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
