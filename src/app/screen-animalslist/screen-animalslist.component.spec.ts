import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAnimalslistComponent } from './screen-animalslist.component';

describe('ScreenAnimalslistComponent', () => {
  let component: ScreenAnimalslistComponent;
  let fixture: ComponentFixture<ScreenAnimalslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenAnimalslistComponent]
    });
    fixture = TestBed.createComponent(ScreenAnimalslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
