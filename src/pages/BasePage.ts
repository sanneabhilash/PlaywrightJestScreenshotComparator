import { Page } from '@playwright/test';
import config from '../../config';

let cnt = 0;

export class BasePage {
  page: Page;

  _selectors = {
    imgHomeLogo: '.logo'
  };

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = '/') {
      await this.page.goto(config.BASE_URL + path, { timeout: 60000 });
  }

  async waitForHomeLogo() {
    await this.page.waitForLoadState();
    await this.page.locator(this._selectors.imgHomeLogo).waitFor()
  }
}
