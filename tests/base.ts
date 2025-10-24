import { test as base } from '@playwright/test';
import { authFixtures } from './fixtures/auth.fixtures';

type TestFixtures = {};

export const test = base.extend<TestFixtures>({
  ...authFixtures,
});

export { expect } from '@playwright/test';
