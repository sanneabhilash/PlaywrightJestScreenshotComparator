import { Page } from '@playwright/test';
import config from '../../config';
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  page: Page;

  selectors = {
  };

  async navigate() {
    await super.navigate('/app.html');
  }
}
