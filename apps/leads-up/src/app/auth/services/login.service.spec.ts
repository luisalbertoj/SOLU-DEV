import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { testData } from '../../../assets/test-data';
import { LoginModel, LoginResModel } from '../models/login.model';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginService],
    });
    service = TestBed.inject(LoginService);
  });
  const users: LoginModel[] = [
    testData.loginCase.case1,
    testData.loginCase.case3,
    testData.loginCase.case2,
  ];
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have login function', () => {
    expect(service.login).toBeTruthy();
  });

  it('this should use the login with success', (done) => {
    service.login(users[0]).subscribe({
      next: (res: LoginResModel) => expect(res.access_token).toBeTruthy(),
      complete: () => done(),
      error: (err) => console.log(err),
    });
  });
  it('this should use the login with failed', (done) => {
    service.login(users[1]).subscribe({
      next: (res) => expect(!res).toBeTruthy(),
      error: (err: HttpErrorResponse) => {
        expect(!err.ok).toBeTruthy();
        done();
      },
    });
  });
  it('this should use the login with failed user null', (done) => {
    service.login(users[2]).subscribe({
      next: (res) => expect(!res).toBeTruthy(),
      error: (err: HttpErrorResponse) => {
        expect(!err.ok).toBeTruthy();
        done();
      },
    });
  });
});
