import { testData } from '../../test-data';

describe('Login test', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should login user', () => {
    cy.login(
      testData.loginCase.case1.username,
      testData.loginCase.case1.password
    );
  });
});
