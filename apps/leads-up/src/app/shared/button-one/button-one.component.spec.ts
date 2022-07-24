import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOneComponent } from './button-one.component';

describe('ButtonOneComponent', () => {
  let component: ButtonOneComponent;
  let fixture: ComponentFixture<ButtonOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
