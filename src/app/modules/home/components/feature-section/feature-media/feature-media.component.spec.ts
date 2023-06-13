import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMediaComponent } from './feature-media.component';

describe('FeatureMediaComponent', () => {
  let component: FeatureMediaComponent;
  let fixture: ComponentFixture<FeatureMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
