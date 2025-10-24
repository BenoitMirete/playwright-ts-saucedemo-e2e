# Playwright TypeScript SauceDemo E2E Testing

End-to-end testing automation project using Playwright with TypeScript on the SauceDemo e-commerce demo platform.

## 📋 Project Overview

This project provides comprehensive end-to-end testing automation for the SauceDemo platform using Playwright and TypeScript. It demonstrates modern testing practices and best practices for web application testing.

## 🚀 Features

- **Playwright Framework**: Modern, fast, and reliable end-to-end testing
- **TypeScript Support**: Type-safe testing with excellent IDE support
- **SauceDemo Integration**: Testing on the popular e-commerce demo platform
- **Multi-Browser Testing**: Chrome, Firefox, Safari, and mobile devices
- **Modern Testing Practices**: Following industry best practices for test automation
- **Parallel Execution**: Tests run in parallel for faster execution
- **HTML Reports**: Detailed test reports with screenshots and traces
- **CI/CD Ready**: Configured for continuous integration environments

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- pnpm (v10.17.1 or higher)

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

## 📁 Project Structure

```
playwright-ts-saucedemo-e2e/
├── playwright.config.ts    # Playwright configuration
├── tests/                  # Test files directory
│   └── *.spec.ts          # Test specifications
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
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
