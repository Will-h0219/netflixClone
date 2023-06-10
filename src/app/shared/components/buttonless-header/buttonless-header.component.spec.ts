import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonlessHeaderComponent } from './buttonless-header.component';

describe('ButtonlessHeaderComponent', () => {
  let component: ButtonlessHeaderComponent;
  let fixture: ComponentFixture<ButtonlessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonlessHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonlessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
