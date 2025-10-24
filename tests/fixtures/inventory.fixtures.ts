import type { Page } from '@playwright/test';
import { InventoryProductsPage } from '../pages/inventory/InventoryProductsPage';

export type InventoryFixtures = {
  inventoryProductsPage: InventoryProductsPage;
};

export const inventoryFixtures = {
  inventoryProductsPage: async ({ page }: { page: Page }, use) => {
    await use(new InventoryProductsPage(page));
  },
};
