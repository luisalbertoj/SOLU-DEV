import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineMenuOneComponent } from './inline-menu-one.component';

describe('InlineMenuOneComponent', () => {
  let component: InlineMenuOneComponent;
  let fixture: ComponentFixture<InlineMenuOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineMenuOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineMenuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
