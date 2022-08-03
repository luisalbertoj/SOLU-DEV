const loginData = { username: 'luis', password: '123' };
describe('Login test', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should login user', () => {
    cy.login(loginData.username, loginData.password);
  });
});
