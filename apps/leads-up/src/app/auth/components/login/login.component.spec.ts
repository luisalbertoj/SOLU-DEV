import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { testData } from '../../../../assets/test-data';
import { environment } from '../../../../environments/environment';
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
    expect(LoginHooks.validateData(testData.loginCase.case2)).toBe(false);
  });
  it('should be validate if data is valid', () => {
    expect(LoginHooks.validateData(testData.loginCase.case1)).toBe(true);
  });
  it('should be validate if data is invalid called login', () => {
    component.loginData = testData.loginCase.case2;
    expect(component.handleLogin(new Event('', undefined))).toBe(false);
  });
  it('this should validate the login method', (done) => {
    component.loginData = testData.loginCase.case1;
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
