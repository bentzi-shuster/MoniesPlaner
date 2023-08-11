import { UserProvider } from '@auth0/nextjs-auth0/client';
import HeaderElm from '../../src/components/Header/Header';
import { test, expect } from '@playwright/experimental-ct-react';


let headerel = <HeaderElm />;
let FixedIt = <UserProvider>{headerel}</UserProvider>
//expect the elm renders
test('Elm renders', async ({ mount }) => {
  const component = await mount(FixedIt);
  await expect(component).toBeVisible();
});
