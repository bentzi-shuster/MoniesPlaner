import Footer from '../../src/components/Footer';
import { test, expect } from '@playwright/experimental-ct-react';


let footerElm = <Footer />;

//expect the elm renders
test('Elm renders', async ({ mount }) => {
  const component = await mount(footerElm);
  await expect(component).toBeVisible();
});
