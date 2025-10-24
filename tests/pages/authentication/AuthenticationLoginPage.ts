import type { Locator, Page } from '@playwright/test';

export class AuthenticationLoginPage {
  readonly page: Page;

  readonly $usernameInput: Locator;
  readonly $passwordInput: Locator;
  readonly $loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.$usernameInput = page.getByTestId('username');
    this.$passwordInput = page.getByTestId('password');
    this.$loginButton = page.getByTestId('login-button');
  }

  public async goto(): Promise<void> {
    await this.page.goto('/');
  }

  public async isReady(): Promise<void> {
    await this.$usernameInput.waitFor({ state: 'visible' });
    await this.$passwordInput.waitFor({ state: 'visible' });
    await this.$loginButton.waitFor({ state: 'visible' });
  }
}
