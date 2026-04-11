import { test, expect } from "@playwright/test";

test.describe("Google Search Tests", () => {
  /*test.beforeeach bir test.describe icinde verilerse yanliz o drescibe scopu  icinde kecerli olur
  desscribe dan yuxarida verilerse sayfedeki butun describelara aid olar ve butun testlerin ilk addimi olur*/

  test.beforeEach("Google ana sayfasina git", async ({ page }) => {
    await page.goto("https://www.google.com.tr/");
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test("Nutella test", async ({ page }) => {
    await page.locator("#APjFqb").fill("Nutella");
    await page.locator("//*[@name='btnK']").nth(1).press("Enter");
    await page.click("#hdtb-tls");
    const result = page.locator("#result-stats");

    //result.textContent() ile result elementinin textContent deyerini aliriq ve console.log ile ekrana yazdiririq
    console.log(result.textContent());
  });


  test("Google test", async ({ page }) => {
    await page.locator("#APjFqb").fill("google");
    await page.locator("//*[@name='btnK']").nth(1).press("Enter");
    await page.click("#hdtb-tls");
    const result = page.locator("#result-stats");

    //result.textContent() ile result elementinin textContent deyerini aliriq ve console.log ile ekrana yazdiririq
    console.log(result.textContent());
  });
});
