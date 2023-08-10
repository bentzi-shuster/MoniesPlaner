import Footer from '../../src/components/Footer';
import { test, expect } from '@playwright/experimental-ct-react';


let footerElm = <Footer />;

//expect the elm renders
test('Elm renders', async ({ mount }) => {
  const component = await mount(footerElm);
  await expect(component).toBeVisible();
});

// social media 

test('fb link', async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let fblnik = await component.locator('[aria-label="Share on FaceBook!"]').first();
  await fblnik.click();
  await page.waitForTimeout(1000);
  await expect(page.url()).toContain("https://www.facebook.com/login.php");
  });
  

test('twitter link', async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let twitterlink = await component.locator('[aria-label="Share on Twitter!"]').first();
  await twitterlink.click();
  await page.waitForTimeout(1000);
  await expect(page.url()).toContain("https://twitter.com/i/flow/login");
  });

test('linkedin link', async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let linkedinlink = await component.locator('[aria-label="Share on LinkedIn!"]').first();
  await linkedinlink.click();
  await page.waitForTimeout(1000);
  await expect(page.url()).toContain("https://www.linkedin.com/signup/cold-join");
  });


test('reddit link', async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let redditlink = await component.locator('[aria-label="Share on Reddit!"]').first();
  await redditlink.click();
  await page.waitForTimeout(1000);
  await expect(page.url()).toContain("https://www.reddit.com/login/");
});



