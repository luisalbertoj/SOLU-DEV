import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMenuOneComponent } from './dashboard-menu-one.component';

describe('DashboardMenuOneComponent', () => {
  let component: DashboardMenuOneComponent;
  let fixture: ComponentFixture<DashboardMenuOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMenuOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMenuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
