import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';
import { DashboardMenuOneComponent } from '../dashboard-menu-one/dashboard-menu-one.component';
import { MenuService } from '../dashboard-menu-one/services/dashboard-menu.service';

import { RightMenuOneComponent } from './right-menu-one.component';

describe('RightMenuOneComponent', () => {
  let component: RightMenuOneComponent;
  let fixture: ComponentFixture<RightMenuOneComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule, NoopAnimationsModule],
      providers: [AppComponent, DashboardMenuOneComponent, MenuService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMenuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('this should be equal to the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });
});
