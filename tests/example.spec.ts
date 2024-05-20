import { test, expect } from '@playwright/test';

test('is running', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DriveScheduler/);
});
