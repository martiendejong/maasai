import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrevpageComponent } from './button-prevpage.component';

describe('ButtonPrevpageComponent', () => {
  let component: ButtonPrevpageComponent;
  let fixture: ComponentFixture<ButtonPrevpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPrevpageComponent]
    });
    fixture = TestBed.createComponent(ButtonPrevpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
