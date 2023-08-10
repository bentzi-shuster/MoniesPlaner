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
  


