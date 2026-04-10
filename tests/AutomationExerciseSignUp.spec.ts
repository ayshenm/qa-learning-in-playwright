import { test, expect } from "@playwright/test";

test("Automation Exercise Sign Up Test", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await expect(
    page.getByAltText("Website for automation practice"),
  ).toBeVisible();
  await page.getByText("Signup / Login").click();
  await expect(page.getByText("New User Signup!")).toBeVisible();
  await page.getByPlaceholder("Name").fill("Ayshen");
  await page
    .getByPlaceholder("Email Address")
    .nth(1)
    .fill("mirzeyevamrirrayy885@gmail.com");

  await page.locator("//button[@data-qa='signup-button']").press("Enter");

  //girisden sonraki formu doldurulmasi
  await page.locator("#id_gender2").check();

  await page.locator("#days").selectOption("9");
  await page.locator("#months").selectOption("February");
  await page.locator("#years").selectOption("1996");
  await page.locator("#newsletter").click();

  await page.locator("#first_name").fill("Nazli");
  await page.locator("#last_name").fill("Mirzeyeva");
  await page.locator("#password").fill("587821534566");
  await page.locator("#company").fill("Test Otomasyonu");
  await page.locator("#address1").fill("Teshhh");
  await page.locator("#address2").fill("Teyonu");
  await page.locator("#state").fill("M.Hadi 23");
  await page.locator("#city").fill("Baku");
  //   await page.locator("#address").fill("Xetai");
  await page.locator("#zipcode").fill("895545");
  await page.locator("#mobile_number").fill("+994555434972");
  await page.locator("#country").selectOption("United States");
  await page.locator("//*[@type='submit']").nth(0).click();

  await expect(page.getByText("Account Created!")).toBeVisible();
});
