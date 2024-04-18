import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NashipaeCulturalOasisComponent } from './nashipae-cultural-oasis.component';

describe('NashipaeCulturalOasisComponent', () => {
  let component: NashipaeCulturalOasisComponent;
  let fixture: ComponentFixture<NashipaeCulturalOasisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NashipaeCulturalOasisComponent]
    });
    fixture = TestBed.createComponent(NashipaeCulturalOasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
