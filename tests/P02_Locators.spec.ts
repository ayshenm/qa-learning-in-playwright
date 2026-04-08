import { test, expect } from "@playwright/test";

// her testden evvel isleyecek test bloku
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.testotomasyonu.com");
});

test.describe("register test", () => {
  test("sayta gedis", async ({ page }) => {
    await expect(page).toHaveTitle("Test Otomasyonu - Test Otomasyonu");
  });

  test("register", async ({ page }) => {
    await page.click("// *[text()='Sign Up Now']");
    // await page.locator("//*[text() = 'Sign Up Now']").click();
    await page.fill("#firstName", "Ayshen");
    await page.fill("#lastName", "Mirzeyeva");
    await page.fill("#signupemail", "mirzayevaayshen@gmail.com");
    await page.fill("#signuppassword", "12345678");
    await page.fill("#comfirmPassword", "12345678");
    await page.click("#btn-submit-form");
  });
});
