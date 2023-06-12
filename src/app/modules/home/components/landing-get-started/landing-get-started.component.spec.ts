import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGetStartedComponent } from './landing-get-started.component';

describe('LandingGetStartedComponent', () => {
  let component: LandingGetStartedComponent;
  let fixture: ComponentFixture<LandingGetStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingGetStartedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
