import { test } from '../base';
import { ErrorMessages } from '../pages/authentication/AuthenticationLoginPage';

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
    'login success with valid credentials',
    { tag: ['@login'] },
    async ({ authenticationLoginPage, inventoryProductsPage }) => {
      await authenticationLoginPage.goto('/');
      await authenticationLoginPage.fillLoginForm(
        process.env.SAUCE_STANDARD_USER_USERNAME as string,
        process.env.SAUCE_DEMO_PASSWORD as string
      );
      await authenticationLoginPage.submitLoginForm();
      await inventoryProductsPage.isReady();
    }
  );

  test(
    'login fails with disabled user',
    { tag: ['@login'] },
    async ({ authenticationLoginPage }) => {
      await authenticationLoginPage.goto('/');
      await authenticationLoginPage.fillLoginForm(
        process.env.SAUCE_LOCKED_USER_USERNAME as string,
        process.env.SAUCE_DEMO_PASSWORD as string
      );
      await authenticationLoginPage.submitLoginForm();
      await authenticationLoginPage.errorMessageIsVisible(
        ErrorMessages.DISABLED_USER
      );
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
      await authenticationLoginPage.errorMessageIsVisible(
        ErrorMessages.INVALID_CREDENTIALS
      );
    }
  );
});
