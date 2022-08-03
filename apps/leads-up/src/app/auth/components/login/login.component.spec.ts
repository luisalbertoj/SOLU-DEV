import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'apps/leads-up/src/environments/environment';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { AppComponent } from '../../../app.component';
import { ToastService } from '../../../shared/toast/services/toast.service';
import { LoginService } from '../../services/login.service';
import { LoginComponent } from './login.component';
import { LoginHooks } from './login.hooks';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: HTMLElement;
  let http: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule, LoginComponent, RouterTestingModule],
      providers: [LoginService, AppComponent, ToastService, MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    http = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('this should be equal to the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });
  it('should be validate if data is invalid', () => {
    expect(LoginHooks.validateData({ username: '', password: '' })).toBe(false);
  });
  it('should be validate if data is valid', () => {
    expect(LoginHooks.validateData({ username: 'luis', password: '123' })).toBe(
      true
    );
  });
  it('should be validate if data is invalid called login', () => {
     component.loginData = { username: '', password: '123' };
     expect(component.handleLogin(new Event('', undefined))).toBe(false);
  });
  it('this should validate the login method', (done) => {
    component.loginData = { username: 'luis', password: '123' };
    component.isLoading$
      .pipe(take(1))
      .subscribe((loading) => expect(loading).toBe(false));
    expect(component.handleLogin(new Event('', undefined))).toBe(true);

    const req = http.expectOne(environment.apiRoute + 'auth/login');
    expect(req.request.method).toBe('POST');
    expect(JSON.stringify(req.request.body)).toBe(
      JSON.stringify(component.loginData)
    );
    done();
  });
});
