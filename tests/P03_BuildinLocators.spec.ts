import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("open Hrm panel giris", async ({ page }) => {
  await expect(page.getByAltText("company-branding")).toBeVisible();
  await expect(page.getByText("Forgot your password?")).toBeVisible();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  //birden artik elementden eyni text olsa nth ile index verilir
  await expect(page.getByText("Dashboard").nth(1)).toBeVisible();
});
