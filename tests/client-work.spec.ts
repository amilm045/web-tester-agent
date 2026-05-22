import { test, expect } from '@playwright/test';

test('EPAM Services -> Client Work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Open the Services menu in the header
  await page.getByRole('navigation', { name: 'Main navigation' })
    .getByRole('button', { name: /services/i })
    .hover();

  // Click the Client Work link from the opened Services menu
  await page.getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: /client work/i })
    .click();

  // Verify the Client Work text is visible
  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
