import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenuOneComponent } from './right-menu-one.component';

describe('RigthMenuOneComponent', () => {
  let component: RightMenuOneComponent;
  let fixture: ComponentFixture<RightMenuOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightMenuOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RightMenuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
