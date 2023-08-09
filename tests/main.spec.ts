import { test, expect } from '@playwright/test';
let pages = [
  {name:"Home",url:"/",title:"Monnies Planner"},
]
for (let i = 0; i < pages.length; i++) {
test(`Test ${pages[i].name} page has title ${pages[i].title}`, async ({ page }) => {
  await page.goto(pages[i].url);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(new RegExp(pages[i].title));
});
}

test('status code is 200', async ({ page }) => {
  await page.goto('/plans');
  //expect url to be localhost:3000/plans
  expect(page.url()).toBe('http://localhost:3000/plans');
  const status = await page.evaluate(() => fetch('/plans').then((res) => res.status));
  expect(status).toBe(200);
});

