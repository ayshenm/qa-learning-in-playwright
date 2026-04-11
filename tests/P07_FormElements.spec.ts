import { test, expect } from "@playwright/test";

test.describe("Form Elements Tests", () => {
  test.beforeEach("Form practise", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //acilan pencerenin olcusu
    await page.setViewportSize({ width: 1850, height: 1080 });
    await page.waitForTimeout(3000);
    //seyfeni 500 px asagi itirmek ucun scrollBy() kullanilir, ilk deyer x ekseni ucundur, ikinci deyer y ekseni ucundur
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
  });

  test.skip("textbox and radiobutton test", async ({ page }) => {
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

  test("dropdown test", async ({ page }) => {
    const dropdownLocator = page.locator("#country");

    //label gore secim
    await dropdownLocator.selectOption("Canada");
    await page.waitForTimeout(3000);
    //value gore secim
    await dropdownLocator.selectOption({ value: "uk" });
    await page.waitForTimeout(3000);
    //index gore secim
    await dropdownLocator.selectOption({ index: 6 });
    await page.waitForTimeout(3000);
    //selectin icinde nece option var oldugunu yoxlayan locator
    const options = page.locator("#country option");
    //icindeki optionlari sayi yazdigimiz qedermi yoxlayirsa .not yazsaq errorsuz kececeyik
    await expect(options).toHaveCount(10);
    // butun otionlari alir ve icinde "China" yazisi olan optionun olub olmadigini yoxlayir
    const texts = (await options.allTextContents()).map((t) => t.trim());
    expect(texts).toContain("Canada");

    const optionsArray = await page.$$("#country option");

    expect(optionsArray).toHaveLength(10);

    let status: boolean;
    status = false;

    for (const each of await optionsArray) {
      let text = await each.textContent();
      if (text === "China") {
        status = true;
        break;
      }
    }

    expect(status).toBeTruthy();
  });

  test("multiply select", async ({ page }) => {
    const multiSelectLocator = page.locator("#colors");
    await multiSelectLocator.selectOption(["Red", "Blue", "Green"]);
    await page.waitForTimeout(3000);
    await expect(multiSelectLocator).toHaveValues(["red", "blue", "green"]);
  });
});

test("Form elements ", async ({ page }) => {});
