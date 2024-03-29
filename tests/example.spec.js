const { test, expect } = require('@playwright/test');  // Importing necessary functions from the playwright/test package...

test('Login to CiviCRM demo site and verify dashboard display', async ({ page }) => {    // Defining a test case to automate login...

  await page.goto('https://dmaster.demo.civicrm.org/');  // Url to navigate to the CiviCRM demo site...

  await page.waitForSelector('#edit-name');  // Wait for login form to load by waiting for presence of an element with the id edit-name...

  await page.fill('#edit-name', 'demo');   // Fill in the username field with demo...
  await page.fill('#edit-pass', 'demo');  // Fill in the pasword field with demo...
  await page.click('#edit-submit');      // Click on the login button...

  await page.waitForSelector('.pie-slice-group'); // Wait for login form to load by waiting for presence of an element with the id pie-slice-group...

  const dashboardTitle = await page.$('.pie-slice-group');  // Find the element representing the dashboard title...
  expect(dashboardTitle).not.toBeNull(); // Assert that dashboard title is present and is not null...

});
