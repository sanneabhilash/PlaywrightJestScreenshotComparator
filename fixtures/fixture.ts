import { Page, test as base } from '@playwright/test';

import {
  BasePage,
  HomePage,
  LoginPage,
} from '../src/pages';

export const test = base.extend<{
  basePage: BasePage;
  homePage: HomePage;
  loginPage: LoginPage;
}>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});

export const expect = test.expect;
