import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNextpageComponent } from './button-nextpage.component';

describe('ButtonNextpageComponent', () => {
  let component: ButtonNextpageComponent;
  let fixture: ComponentFixture<ButtonNextpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonNextpageComponent]
    });
    fixture = TestBed.createComponent(ButtonNextpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
