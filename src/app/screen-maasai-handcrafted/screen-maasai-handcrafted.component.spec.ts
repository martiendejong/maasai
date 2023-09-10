import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMaasaiHandcraftedComponent } from './screen-maasai-handcrafted.component';

describe('ScreenMaasaiHandcraftedComponent', () => {
  let component: ScreenMaasaiHandcraftedComponent;
  let fixture: ComponentFixture<ScreenMaasaiHandcraftedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenMaasaiHandcraftedComponent]
    });
    fixture = TestBed.createComponent(ScreenMaasaiHandcraftedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
