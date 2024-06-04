import { test, expect } from '@playwright/test';

test('should redirect to unauthorized page on 401 response', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('link', { name: 'Planning' }).click();

  await expect(page).toHaveURL('http://localhost:4200/error');
  await expect(page.locator('div').filter({ hasText: 'ERREUR Page inaccessible.' }).first()).toBeVisible();
});

test.describe('Calendar Component Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.addInitScript(() => {
            localStorage.setItem('token', 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjI4NjA5N2ZmLTRkMmUtNDljNi1hZWMwLTRhNGFjZDFmMDI5YiIsIkZpcnN0TmFtZSI6IkhhbXphIiwiUm9sZSI6IjAiLCJleHAiOjE3MjAxMTcxNjksImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTE3My8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUxNzMvIn0.K53vDeOUYscg39DO8DaPEBKCCEJy8yHuG3awjzNfArQ');
            });
    });
  
    test('should display the CalendarComponent when authenticated', async ({ page }) => {

      await page.goto('http://localhost:4200/');
  
      await page.getByRole('link', { name: 'Planning' }).click();
  
      await expect(page).toHaveURL('http://localhost:4200/calendar');  
      await expect(page.getByRole('heading', { name: 'Mon planning' })).toBeVisible();  
    });
  });

  test.describe('Calendar Component Test', () => {
    test.beforeEach(async ({ page }) => {
        await page.addInitScript(() => {
            localStorage.setItem('token', 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjVmZDQ3N2Y0LWM5OWQtNDljMS05MWQ3LTlmNWJjMmZlOThhNyIsIkZpcnN0TmFtZSI6IkpvZSIsIlJvbGUiOiIxIiwiZXhwIjoxNzIwMTI2MTY5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxNzMvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTczLyJ9.s1vuhyLzBqa3AQR_Mld1ZL5Uqq8ZKESnpGt4YOh6jd0');
            });
    });

    test('should create lesson ok', async ({ page }) => {

        let currentDate = new Date();

        // Ajoutez un jour à la date actuelle
        currentDate.setDate(currentDate.getDate() + 1);
        currentDate.setHours(11); 
        currentDate.setMinutes(0); 
        currentDate.setSeconds(0); 

        let startDate = currentDate.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        });

        currentDate.setMinutes(30); 
        let endDate = currentDate.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        });

        let dateString = `${startDate} GMT+02:00 Ends At ${endDate} GMT+02:00`;
        console.log(dateString);
        await page.goto('http://localhost:4200/calendar');
        await page.getByLabel(dateString).click();
        await page.getByLabel('Titre').click();
        await page.getByLabel('Titre').fill('TEST CONDUITE');
        await page.getByRole('button', { name: 'Créer' }).click();
        await expect(page.getByText('Cours créé !')).toBeVisible();
    });

    test('should update lesson ok', async ({ page }) => {
        await page.goto('http://localhost:4200/calendar');
        await page.getByLabel('TEST CONDUITE Begin From').click();
        await page.getByRole('button', { name: 'Modifier' }).click();
        await expect(page.getByText('Cours mis à jour !')).toBeVisible();
    });

    test('should delete lesson ok', async ({ page }) => {

        await page.goto('http://localhost:4200/calendar');
        await page.getByLabel('TEST CONDUITE Begin From').click();
        await page.getByRole('button', { name: 'Supprimer' }).click();
        await expect(page.getByText('Cours supprimé !')).toBeVisible();
    });
  });