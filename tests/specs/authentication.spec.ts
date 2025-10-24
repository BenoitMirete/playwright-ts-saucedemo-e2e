import { test } from '../base';

test(
  'authentication - login form is displayed',
  { tag: ['@ready', '@authentication', '@login'] },
  async ({ authenticationLoginPage }) => {
    await authenticationLoginPage.goto('/');
    await authenticationLoginPage.isReady();
  }
);
