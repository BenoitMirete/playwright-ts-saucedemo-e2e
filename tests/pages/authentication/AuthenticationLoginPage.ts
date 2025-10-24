import { expect, type Locator, type Page } from '@playwright/test';

export enum ErrorMessages {
  DISABLED_USER = 'Epic sadface: Sorry, this user has been locked out.',
  INVALID_CREDENTIALS = 'Epic sadface: Username and password do not match any user in this service',
}

export class AuthenticationLoginPage {
  readonly page: Page;

  readonly $usernameInput: Locator;
  readonly $passwordInput: Locator;
  readonly $loginButton: Locator;

  readonly $errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.$usernameInput = page.getByTestId('username');
    this.$passwordInput = page.getByTestId('password');
    this.$loginButton = page.getByTestId('login-button');

    this.$errorMessage = page.getByTestId('error');
  }

  public async goto(): Promise<void> {
    await this.page.goto('/');
    await this.isReady();
  }

  private async isReady(): Promise<void> {
    await this.$usernameInput.waitFor({ state: 'visible' });
    await this.$passwordInput.waitFor({ state: 'visible' });
    await this.$loginButton.waitFor({ state: 'visible' });
  }

  public async fillLoginForm(
    username: string,
    password: string
  ): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }

  public async errorMessageIsVisible(
    errorMessage: ErrorMessages
  ): Promise<void> {
    await this.$errorMessage.waitFor({ state: 'visible' });
    const errorMessageText = await this.getErrorMessage();
    expect(errorMessageText).toBe(errorMessage);
  }

  public async hasErrorMessage(): Promise<boolean> {
    return await this.$errorMessage.isVisible();
  }

  private async getErrorMessage(): Promise<string | null> {
    return await this.$errorMessage.textContent();
  }

  public async submitLoginForm(): Promise<void> {
    await this.$loginButton.click();
  }

  private async fillUsername(username: string): Promise<void> {
    await this.$usernameInput.fill(username);
  }

  private async fillPassword(password: string): Promise<void> {
    await this.$passwordInput.fill(password);
  }
}
