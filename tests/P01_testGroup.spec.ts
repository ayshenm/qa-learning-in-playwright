import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.testotomasyonu.com");
});
//birden artılı testleri tek bir başlık altında toplamak için describe kullanılır
test.describe("group of tests", () => {
  test("first page title test", async ({ page }) => {
    await expect(page).toHaveTitle(/Test Otomasyonu/);
  });

  test("first page URL test", async ({ page }) => {
    await expect(page).toHaveURL("https://www.testotomasyonu.com");
  });
});
