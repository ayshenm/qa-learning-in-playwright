import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
  await page.goto("https://www.testotomasyonu.com");
  await expect(page).toHaveTitle(/Test Otomasyonu/);
  await expect(page).toHaveURL("https://www.testotomasyonu.com");
});
