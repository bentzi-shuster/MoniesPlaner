//https://playwright.dev/docs/auth
//** MAKE playwright/.auth  ***/
import { test as setup, expect } from '@playwright/test';
let testaccount = {
  username: process.env.TEST_ACCT_NAME,
  password: process.env.TEST_ACCT_PWD
}
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('/api/auth/login');
  await page.locator('#username').fill(testaccount.username as string);
  await page.locator('#password').fill(testaccount.password as string);
  await page.locator('button[type="submit"][name="action"][value="default"][data-action-button-primary]:has-text("Continue")').click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set. 
  await page.waitForURL(/\/api\/auth\/callback\?(.*)/);
  //wait for a session cookie
  await page.waitForFunction(() => document.cookie.includes('appSession='));
  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});