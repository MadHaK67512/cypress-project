# Cypress E2E Testing Project

**Course:** CSE482 – Software Testing
**Semester:** Spring 2026
**Instructor:** Ms. Yella Mehroze

---

## Website Under Test

**https://www.saucedemo.com** — A demo e-commerce shopping application used for QA practice.

**Test Credentials:**

- Username: `standard_user`
- Password: `secret_sauce`

---

## How to Run Tests

### Prerequisites

- Node.js v18 or above
- npm

### Installation

```bash
npm install
```

### Open Cypress GUI

```bash
npx cypress open
```

Select **E2E Testing** → Choose browser → Click any spec file to run.

### Run All Tests in Terminal

```bash
npx cypress run
```

### Run a Specific File

```bash
npx cypress run --spec "cypress/e2e/task1/login.cy.js"
```

---

## Task 1 — UI Test Suite

| File               | Test Cases                                | Commands Used                     |
| ------------------ | ----------------------------------------- | --------------------------------- |
| `login.cy.js`      | Valid login, Wrong password, Empty fields | cy.visit(), cy.get(), cy.should() |
| `navigation.cy.js` | Menu navigation, Two page sequence        | cy.visit(), cy.get(), cy.should() |
| `form.cy.js`       | Checkout form fill and submit             | cy.visit(), cy.get(), cy.should() |

---

## Task 2 — Assertions, Aliases & Custom Commands

| File                  | What it covers                                       |
| --------------------- | ---------------------------------------------------- |
| `assertions.cy.js`    | be.visible, have.text, have.attr, not.exist          |
| `aliases.cy.js`       | .as() alias, @alias usage, custom cy.login() command |
| `support/commands.js` | Custom reusable cy.login() command                   |

### Custom Command

```javascript
// Defined in cypress/support/commands.js
Cypress.Commands.add("login", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

// Used in aliases.cy.js as:
cy.login("standard_user", "secret_sauce");
```

---

## What I Found Difficult (Task 2)

Setting up the `beforeEach` hook correctly so it ran before every test without duplicating `cy.visit()` was initially confusing. I solved it by placing `cy.visit()` inside the `beforeEach()` block at the top of each `describe()` block. This made all tests in that block automatically start from the correct page without any repetition. It also made the tests cleaner and easier to read. This taught me the importance of hooks in reducing code duplication in test suites.

---
