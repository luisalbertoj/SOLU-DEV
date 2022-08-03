import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';
import { DashboardMenuOneComponent } from '../dashboard-menu-one/dashboard-menu-one.component';
import { MenuService } from '../dashboard-menu-one/services/dashboard-menu.service';

import { AppConfigComponent } from './app-config.component';

describe('AppConfigComponent', () => {
  let component: AppConfigComponent;
  let fixture: ComponentFixture<AppConfigComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule],
      providers: [DashboardMenuOneComponent, MenuService, AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConfigComponent);
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
