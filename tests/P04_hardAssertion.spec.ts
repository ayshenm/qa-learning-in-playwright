import { test, expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";
import { describe } from "node:test";

test.describe("hard assertion tests", async () => {
  test.skip("Demoblaze assertion test", async ({ page }) => {
    //skip ile test atlanir, test.skip() ile de test atlanir
    await page.goto("https://www.demoblaze.com/cart.html");
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://www.demoblaze.com/cart.html");
    //ana seyfede o yoxsa not.toBeVisible() ile yoxlanilir, amma sehifede var amma gorunmurse not.toBeAttached() ile yoxlanilir
    // await expect(page.getByText("Place Order").nth(1)).not.toBeAttached();
    await expect(page.getByText("Place Order").nth(1)).toBeAttached();
  });

  test("Testautoomationpractice assertion test", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //checkboxun secildiyini yoxlamaq ucun toBeChecked() ve not.toBeChecked() kullanilir
    await page.locator("#male").check();
    //toBeChecked() ile checkboxun secildiyini yoxlayiriq, not.toBeChecked() ile checkboxun secilmədiyini yoxlayiriq
    await expect(page.locator("#male")).toBeChecked();
    //enable ve disable olmasini yoxlamaq ucun toBeEnabled() ve not.toBeEnabled() kullanilir
    await expect(page.locator("#name")).toBeEnabled();
    //dolu ve bos olmasi durumunu yoxlamaq ucun toBeEmpty() ve not.toBeEmpty() kullanilir
    await expect(page.locator("#name")).toBeEmpty();
    // await expect(page.locator("#name")).not.toBeEnabled();
    await page.locator("#name").fill("Ayshen");
    await expect(page.locator("#name")).not.toBeEmpty();
    await page.locator("#email").fill("ayshen@example.com");
    //icindeki deyerin verilenle eyni olub olmadigini yoxlamaq ucun toHaveValue() ve not.toHaveValue() kullanilir
    await expect(page.locator("#name")).toHaveValue("Ayshen");
  });

  test("demoQa.com assertion test", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    //acilan pencerinin gorunen hissesinde olub olmadigini yoxlamaq ucun toBeInViewport() ve not.toBeInViewport() kullanilir
    await expect(page.getByText("Book Store Application")).not.toBeInViewport();
    //textin icinde verilen textin olub olmadigini yoxlamaq ucun toContainText() ve not.toContainText() kullanilir
    await expect(page.getByText("Book Store Application")).toContainText(
      "Store",
    );
    await expect(page.getByText("Book Store Application")).toContainText("ion");
    await expect(page.getByText("Book Store Application")).toContainText(
      "Book",
    );
    //textin icinde verilen textin tam olaraq eyni olub olmadigini yoxlamaq ucun toHaveText() ve not.toHaveText() kullanilir
    await expect(page.getByText("Book Store ")).toHaveText(
      "Book",
    );
    await expect(page.getByText("Book Store Application")).toHaveText(
      "Bookstore Application",
    );
    await expect(page.getByText("Book Store Application")).toHaveText("Books");
    await expect(
      page.getByAltText("Selenium Online"),
    ).toBeInViewport();
  });
});
