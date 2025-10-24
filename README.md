# Playwright TypeScript SauceDemo E2E Testing

End-to-end testing automation project using Playwright with TypeScript on the SauceDemo e-commerce demo platform.

## 📋 Project Overview

This project provides comprehensive end-to-end testing automation for the SauceDemo platform using Playwright and TypeScript. It demonstrates modern testing practices and best practices for web application testing.

## 🚀 Features

- **Playwright Framework**: Modern, fast, and reliable end-to-end testing
- **TypeScript Support**: Type-safe testing with excellent IDE support
- **Page Object Model**: Clean, maintainable test architecture with reusable page objects
- **Playwright Fixtures**: Custom fixtures for dependency injection and test setup
- **SauceDemo Integration**: Testing on the popular e-commerce demo platform
- **Multi-Browser Testing**: Chrome, Firefox, Safari, and mobile devices
- **Modern Testing Practices**: Following industry best practices for test automation
- **Parallel Execution**: Tests run in parallel for faster execution
- **HTML Reports**: Detailed test reports with screenshots and traces
- **CI/CD Ready**: Configured for continuous integration environments

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.17.1 or higher)

## 🌍 Environment Information

### **System Requirements**

- **Operating System**: Linux, macOS, or Windows
- **Node.js**: v18.0.0 or higher
- **Package Manager**: pnpm v10.17.1 (recommended) or npm/yarn

### **Browser Support**

This project tests across multiple browsers and devices:

- **Desktop Browsers**:
  - Chrome (Chromium)
  - Firefox
  - Safari (WebKit)

- **Mobile Devices**:
  - Mobile Chrome (Pixel 5)
  - Mobile Safari (iPhone 12)

### **Configuration Files**

- **`playwright.config.ts`**: Main Playwright configuration with browser settings and test options
- **`tsconfig.json`**: TypeScript configuration with ES2022 target and strict mode
- **`package.json`**: Project dependencies and scripts
- **`eslint.config.js`**: ESLint configuration for code quality
- **`commitlint.config.js`**: Commit message linting rules

### **Development Environment Setup**

1. **Node.js Version**: Ensure you're using Node.js v18 or higher

   ```bash
   node --version  # Should be v18.0.0+
   ```

2. **Package Manager**: Use pnpm for optimal performance

   ```bash
   npm install -g pnpm@10.17.1
   ```

3. **Browser Installation**: Playwright will automatically install required browsers
   ```bash
   pnpm exec playwright install
   ```

### **CI/CD Environment**

For continuous integration environments:

- Set `CI=true` environment variable
- Tests will run with 2 retries on failure
- Single worker mode for stability
- HTML reports are generated automatically

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd playwright-ts-saucedemo-e2e
```

2. Install dependencies:

```bash
pnpm install
```

3. Install Playwright browsers:

```bash
pnpm exec playwright install
```

## 🧪 Running Tests

Run all tests:

```bash
pnpm test
```

Run tests with browser UI:

```bash
pnpm test:headed
```

Run tests in debug mode:

```bash
pnpm test:debug
```

Run tests with interactive UI:

```bash
pnpm test:ui
```

View test reports:

```bash
pnpm test:report
```

## 💡 Usage Examples

### **Page Object Model Example**

```typescript
// tests/pages/authentication/AuthenticationLoginPage.ts
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
```

### **Playwright Fixtures Example**

```typescript
// tests/fixtures/auth.fixtures.ts
export const authFixtures = {
  authenticationLoginPage: async ({ page }: { page: Page }, use) => {
    await use(new AuthenticationLoginPage(page));
  },
};

// tests/base.ts
export const test = base.extend<TestFixtures>({
  ...authFixtures,
});
```

### **Test Implementation Example**

```typescript
// tests/specs/authentication.spec.ts
import { test } from '../base';

test(
  'authentication - login form is displayed',
  { tag: ['@ready', '@authentication', '@login'] },
  async ({ authenticationLoginPage }) => {
    await authenticationLoginPage.goto('/');
    await authenticationLoginPage.isReady();
  }
);
```

## 🏗️ Architecture

This project follows modern testing architecture patterns with **Page Object Model** and **Playwright Fixtures**:

### **Page Object Model (POM)**

- **Encapsulation**: Each page is represented by a class that encapsulates page elements and actions
- **Reusability**: Page objects can be reused across multiple tests
- **Maintainability**: Changes to page structure only require updates in one place
- **Type Safety**: Full TypeScript support with proper typing for all elements

### **Playwright Fixtures**

- **Dependency Injection**: Custom fixtures provide page objects to tests automatically
- **Test Setup**: Fixtures handle initialization and cleanup of test dependencies
- **Type Safety**: Fixtures are fully typed for better IDE support and error prevention
- **Modularity**: Fixtures can be composed and extended for different test scenarios

## 📁 Project Structure

```
playwright-ts-saucedemo-e2e/
├── playwright.config.ts           # Playwright configuration
├── tests/                         # Test files directory
│   ├── base.ts                    # Custom test fixtures setup
│   ├── fixtures/                  # Playwright fixtures
│   │   └── auth.fixtures.ts       # Authentication fixtures
│   ├── pages/                     # Page Object Model classes
│   │   └── authentication/        # Authentication page objects
│   │       └── AuthenticationLoginPage.ts
│   └── specs/                     # Test specifications
│       └── authentication.spec.ts
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation
```

## 🏷️ Keywords

playwright, typescript, e2e, testing, sauce, saucedemo

## 👨‍💻 Author

Benoit Mirete <pro@roarth.fr>

## 📄 License

ISC

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [SauceDemo Platform](https://www.saucedemo.com/)
