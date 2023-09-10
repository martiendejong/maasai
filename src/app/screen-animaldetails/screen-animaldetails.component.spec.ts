import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAnimaldetailsComponent } from './screen-animaldetails.component';

describe('ScreenAnimaldetailsComponent', () => {
  let component: ScreenAnimaldetailsComponent;
  let fixture: ComponentFixture<ScreenAnimaldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenAnimaldetailsComponent]
    });
    fixture = TestBed.createComponent(ScreenAnimaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
