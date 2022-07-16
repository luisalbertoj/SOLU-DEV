import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDefault1Component } from './button-default1.component';

describe('ButtonDefault1Component', () => {
  let component: ButtonDefault1Component;
  let fixture: ComponentFixture<ButtonDefault1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDefault1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDefault1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
