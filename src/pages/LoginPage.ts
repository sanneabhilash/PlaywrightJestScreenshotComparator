import { Page } from '@playwright/test';
import config from '../../config';
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  page: Page;

  selectors = {
    txtUserName: '#username',
    txtPassword: '#password',
    btnSignIn: '#log-in',
  };

  async navigate() {
    await super.navigate('/');
  }

  async login(username: string = config.USERNAME, password: string = config.PASSWORD) {
    await this.page.fill(this.selectors.txtUserName, username);
    await this.page.fill(this.selectors.txtPassword, password);
    await this.page.click(this.selectors.btnSignIn);
    await super.waitForHomeLogo();
  }
}
