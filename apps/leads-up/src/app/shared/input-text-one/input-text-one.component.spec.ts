import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextOneComponent } from './input-text-one.component';

describe('InputTextOneComponent', () => {
  let component: InputTextOneComponent;
  let fixture: ComponentFixture<InputTextOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
