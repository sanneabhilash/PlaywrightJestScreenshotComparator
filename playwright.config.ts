import { defineConfig } from '@playwright/test';
import config from './config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: config.BASE_URL,
    trace: 'on-first-retry',
  }
});
