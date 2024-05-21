import { test, expect } from '@playwright/test';

test('is running', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await expect(page).toHaveTitle(/DriveScheduler/);
});
