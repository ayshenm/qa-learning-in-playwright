import { test, expect } from "@playwright/test";

test("textbox and radiobutton test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const nameLocator = page.locator("#name");
  const maleLocator = page.locator("#male");
  const famaleLocator = page.locator("#female");

  await nameLocator.fill("Ayshen");
  await famaleLocator.check();

  await expect.soft(nameLocator).toHaveValue("Ayshen");
  await expect.soft(famaleLocator).toBeChecked();

  //seyfedeki butun chexboxlari secmey

  const checkArrays = [
    page.locator("#sunday"),
    page.locator("#monday"),
    page.locator("#tuesday"),
    page.locator("#wednesday"),
    page.locator("#thursday"),
    page.locator("#friday"),
    page.locator("#saturday"),
  ];

  for (const check of checkArrays) {
    await check.check();
    await expect(check).toBeChecked();
  }
});
