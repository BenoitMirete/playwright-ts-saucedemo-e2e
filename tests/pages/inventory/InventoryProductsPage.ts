import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryProductsPage {
  readonly page: Page;

  readonly $primaryHeader: Locator;
  readonly $cartLink: Locator;
  readonly $title: Locator;

  readonly $invetoryItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.$primaryHeader = page.getByTestId('primary-header');
    this.$cartLink = page.getByTestId('shopping-cart-link');
    this.$title = page.getByTestId('title');

    this.$invetoryItem = page.getByTestId('inventory-item');
  }

  public async goto(): Promise<void> {
    await this.page.goto('/inventory.html');
    await this.isReady();
  }

  public async isReady(): Promise<void> {
    await this.$primaryHeader.waitFor({ state: 'visible' });
    await this.$cartLink.waitFor({ state: 'visible' });
    await this.$title.waitFor({ state: 'visible' });
    await this.$invetoryItem.first().waitFor({ state: 'visible' });

    const inventoryItems = await this.$invetoryItem.count();
    expect(inventoryItems).toBeGreaterThan(0);
  }
}
