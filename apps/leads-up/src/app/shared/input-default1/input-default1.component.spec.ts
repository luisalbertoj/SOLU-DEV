import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDefault1Component } from './input-default1.component';

describe('InputDefault1Component', () => {
  let component: InputDefault1Component;
  let fixture: ComponentFixture<InputDefault1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDefault1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(InputDefault1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
