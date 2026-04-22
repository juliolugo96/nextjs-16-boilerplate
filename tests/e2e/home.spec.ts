import { expect, test } from '@playwright/test';

test('home page renders the pattern explorer and filters patterns', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'TypeScript patterns workspace' }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Singleton' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Container/Presentational' }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'react' }).click();

  await expect(page.getByRole('heading', { name: 'Singleton' })).toBeHidden();
  await expect(
    page.getByRole('heading', { name: 'Container/Presentational' }),
  ).toBeVisible();
  await expect(page.getByText('14 patterns mapped')).toBeVisible();
});
