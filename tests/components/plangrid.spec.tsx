import { test, expect } from '@playwright/experimental-ct-react';
import PlanGrid from '../../src/components/PlanItem/PlanGrid';
import { beforeMount, afterMount } from '@playwright/experimental-ct-react/hooks';
// https://playwright.dev/docs/test-components  🙏🙏🙏🙏
// https://playwright.dev/docs/test-components#q-i-cant-import-anything-other-than-the-components-from-tsxjsxcomponent-files  
// read the above 
test.use({ viewport: { width: 500, height: 500 } });
export type HooksConfig = {
  enableRouting?: boolean;
}
test('should work', async ({ mount }) => {
  const component = await mount(<PlanGrid plans={[{
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
  }]}/>);
  await expect(component).toBeVisible();
});