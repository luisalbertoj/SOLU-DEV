import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOneComponent } from './nav-bar-one.component';

describe('NavBarOneComponent', () => {
  let component: NavBarOneComponent;
  let fixture: ComponentFixture<NavBarOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
