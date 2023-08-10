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
  await page.waitForURL(/https:\/\/www.facebook.com\/login.php(.?)/)
  await expect(page.url()).toContain("https://www.facebook.com/login.php");
  });
  

  test('reddit link', async ({ mount ,page}) => {
    const component = await mount(footerElm);
    let redditlink = await component.locator('[aria-label="Share on Reddit!"]').first();
    await redditlink.click();
    await page.waitForURL(/https:\/\/www.reddit.com\/login\/(.?)/)
    await expect(page.url()).toContain("https://www.reddit.com/login/");
  });

  
test('twitter link', async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let twitterlink = await component.locator('[aria-label="Share on Twitter!"]').first();
  await twitterlink.click();
  await page.waitForURL(/https:\/\/twitter.com\/i\/flow\/login(.?)/)
  await expect(page.url()).toContain("https://twitter.com/i/flow/login");
  });

test('linkedin link', async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let linkedinlink = await component.locator('[aria-label="Share on LinkedIn!"]').first();
  await linkedinlink.click();
  await page.waitForURL(/https:\/\/www.linkedin.com\/signup\/cold-join(.?)/)
  await expect(page.url()).toContain("https://www.linkedin.com/signup/cold-join");
  });



const companyLinks = [
  { label: 'About Us', url: '#' },
  { label: 'Contact', url: '#' },
  { label: 'Jobs', url: '#' },
  { label: 'Press kit', url: '#' },
];

const legalLinks = [
  { label: 'Terms of use', url: '#' },
  { label: 'Privacy policy', url: '#' },
  { label: 'Cookie policy', url: '#' },
];


// company links
for (let i = 0; i < companyLinks.length; i++) {
  test(`Company link ${companyLinks[i].label} Link in footer`, async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let aboutuslink = await component.locator(`text="${companyLinks[i].label}"`).first();
  await aboutuslink.click();
  await expect(page.url()).toContain(companyLinks[i].url);
  });
}

// legal links
for (let i = 0; i < legalLinks.length; i++) {
  test(`Legal link ${legalLinks[i].label} Link in footer`, async ({ mount ,page}) => {
  const component = await mount(footerElm);
  let legalink = await component.locator(`text="${legalLinks[i].label}"`).first();
  await legalink.click();
  await expect(page.url()).toContain(legalLinks[i].url);
  });
}