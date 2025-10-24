import { test } from '../base';

const INVALID_CREDENTIALS = {
  username: 'invalid_username',
  password: 'invalid_password',
};

test.describe('authentication', { tag: ['@authentication'] }, () => {
  test(
    'login form is displayed',
    { tag: ['@login'] },
    async ({ authenticationLoginPage }) => {
      await authenticationLoginPage.goto('/');
    }
  );

  test(
    'login fails with invalid credentials',
    { tag: ['@login'] },
    async ({ authenticationLoginPage }) => {
      await authenticationLoginPage.goto('/');
      await authenticationLoginPage.fillLoginForm(
        INVALID_CREDENTIALS.username,
        INVALID_CREDENTIALS.password
      );
      await authenticationLoginPage.submitLoginForm();
      await authenticationLoginPage.errorMessageIsVisible();
    }
  );
});
