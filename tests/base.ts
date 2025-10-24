import { test as base } from '@playwright/test';
import { authFixtures, type AuthFixtures } from './fixtures/auth.fixtures';
import {
  inventoryFixtures,
  type InventoryFixtures,
} from './fixtures/inventory.fixtures';

type TestFixtures = {} & AuthFixtures & InventoryFixtures;

export const test = base.extend<TestFixtures>({
  ...authFixtures,
  ...inventoryFixtures,
});

export { expect } from '@playwright/test';
