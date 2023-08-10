import { test, expect } from '@playwright/experimental-ct-react';
import PlanGrid from '../../src/components/PlanItem/PlanGrid';
import PlanItem from '@/src/components/PlanItem/PlanItem';
import ViewPlanPopup from '@/src/components/PlanItem/ViewPlanPopup';
import { beforeMount, afterMount } from '@playwright/experimental-ct-react/hooks';
// https://playwright.dev/docs/test-components  🙏🙏🙏🙏
// https://playwright.dev/docs/test-components#q-i-cant-import-anything-other-than-the-components-from-tsxjsxcomponent-files  
// read the above 
test.use({ viewport: { width: 500, height: 500 } });
export type HooksConfig = {
  enableRouting?: boolean;
}

let PlnGrdElm = <PlanGrid plans={[{
    "id": 1,
    "title": "Test Plan",
    "rent": 1000,
    "groceries": 500,
    "utilities": 200,
    "transportation": 100,
    "entertainment": 100,
    "property_tax": 100,
    "insurance": 100,
    "vehicle_payment": 100,
    "vehicle_insurance": 100,
    "personal_care": 100,
    "income": 100,
    "user_sub": "auth0|60a7b0b0b0b0b0b0b0b0b0b0",
    "display_name": "Test User",
    "car_make": "Test Make",
    "car_model": "Test Model",
    "visibility": true,
    "created_at": new Date(),
    "modified_at": new Date()
  },{
    "id": 2,
    "title": "Test Plan",
    "rent": 1000,
    "groceries": 500,
    "utilities": 200,
    "transportation": 100,
    "entertainment": 100,
    "property_tax": 100,
    "insurance": 100,
    "vehicle_payment": 100,
    "vehicle_insurance": 100,
    "personal_care": 100,
    "income": 100,
    "user_sub": "auth0|60a7b0b0b0b0b0b0b0b0b0b0",
    "display_name": "Test User",
    "car_make": "Test Make",
    "car_model": "Test Model",
    "visibility": true,
    "created_at": new Date(),
    "modified_at":null
  }]}/>

//expect the elm renders
test('Elm renders', async ({ mount }) => {
  const component = await mount(PlnGrdElm);
  await expect(component).toBeVisible();
});


// expect a popup when a card is clicked 
test("popup renders when a card is clicked ",async ({ mount }) => {
  const component = await mount(PlnGrdElm);
  //click on a card in the grid
  let plancard = await component.locator(".plancard").first()
  await plancard.click();
  await expect(component.locator(".viewplanpopup")).toBeVisible();
});
//expect the popup to close when clicked outside
test("popup closes when clicked outside",async ({ mount }) => {
  const component = await mount(PlnGrdElm);
  //click on a card in the grid
  let plancard = await component.locator(".plancard").first()
  await plancard.click();
  await expect(component.locator(".viewplanpopup")).toBeVisible();
  await component.locator(".viewplanpopupbg").first().click({
    position: { x: 0, y: 0 }
  });
  await expect(component.locator(".viewplanpopup")).not.toBeVisible();
});

//clicking on the card does not close the popup
test("clicking on the card does not close the popup",async ({ mount }) => {
  const component = await mount(PlnGrdElm);
  //click on a card in the grid
  let plancard = await component.locator(".plancard").first()
  await plancard.click();
  let viewplanpopup = await component.locator(".viewplanpopup").first();
  await expect(viewplanpopup).toBeVisible();
  await viewplanpopup.click();
  await expect(component.locator(".viewplanpopup")).toBeVisible();
});

//expect the tabs in the popup to work
test("expect the tabs in the popup to work",async ({ mount }) => {
  const component = await mount(PlnGrdElm);
  //click on a card in the grid
  let plancard = await component.locator(".plancard").first()
  await plancard.click();
  //#radix-:ri:-trigger-Car is tab 2,radix-:ri:-trigger-Income is tab 3, radix-:ri:-trigger-Lifestyle is tab 1
  let tab2 = await component.getByText("Car").first();
  await tab2.click();
  let tab2Content = await component.locator(".Car").first();
  await expect(tab2Content).toBeVisible();
  let tab3 = await component.locator("button:has-text('Income')").first();
  await tab3.click();
  let tab3Content = await component.locator(".Income").first();
  await expect(tab3Content).toBeVisible();
  let tab1 = await component.getByText("Lifestyle").first();
  await tab1.click();
  let tab1Content = await component.locator(".Lifestyle").first();
  await expect(tab1Content).toBeVisible();
});