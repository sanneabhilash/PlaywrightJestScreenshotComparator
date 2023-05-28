import { chromium, Page } from '@playwright/test';
import config from '../config';
import { HomePage, LoginPage } from '../src/pages';

const list = ['/', '/app.html']


describe('screenshot comparision test demo for full page', () => {
  let browser;
  let context;
  let page: Page;
  let homePage: HomePage;
  let loginPage: LoginPage;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false, timeout: 60000 });
    context = await browser.newContext();
    page = await context.newPage();
    await page.setViewportSize({ width: 1200, height: 1000 });
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });

  afterAll(async () => {
    await browser.close();
  });


    test(`Login Page Screenshot [${config.TEST_MODE}]`, async () => {
      await loginPage.navigate();
      console.log(page.url());
      await page.waitForLoadState();
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot({
        customSnapshotsDir: `baseline/`,
        customSnapshotIdentifier: `pages_loginPage_fails`,
        failureThreshold: config.THRESHOLD,
        failureThresholdType: 'pixel',
      });
      console.log(`Snapshot captured for loginPage`);
    });

    test(`Login Page Screenshot [${config.TEST_MODE}]`, async () => {
      await loginPage.navigate();
      console.log(page.url());
      await page.waitForLoadState();
      await page.waitForTimeout(2000);
      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot({
        customSnapshotsDir: `baseline/`,
        customSnapshotIdentifier: `pages_loginPage_success`,
        failureThreshold: config.THRESHOLD,
        failureThresholdType: 'pixel',
      });
      console.log(`Snapshot captured for loginPage`);
    });
});
