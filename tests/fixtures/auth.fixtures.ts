import type { Page } from '@playwright/test';
import { AuthenticationLoginPage } from '../pages/authentication/AuthenticationLoginPage';

export type AuthFixtures = {
  authenticationLoginPage: AuthenticationLoginPage;
};

export const authFixtures = {
  authenticationLoginPage: async ({ page }: { page: Page }, use) => {
    await use(new AuthenticationLoginPage(page));
  },
};
