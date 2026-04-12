import { test, expect } from "@playwright/test";

test.describe("Dialog tests", () => {
  test.beforeEach("Dialog practise", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setViewportSize({ width: 1850, height: 1080 });
    await page.waitForTimeout(3000);
  });

  test("Alert Function test", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toBe("I am an alert box!");
      dialog.accept();
    });
    await page.click("//*[text()='Alert']");
  });

  test("Confirm Function test", async ({ page }) => {
    page.on("dialog", (dialog) => {
      expect(dialog.type()).toBe("confirm");
      expect(dialog.message()).toBe("Press a button!");
      // dialog.accept();
      dialog.dismiss();
    });
    // await page.click("//*[text()='Confirmation Alert']");
    await page.getByText("Confirmation Alert").click();
    expect(await page.locator("#demo").textContent()).toBe("You pressed Cancel!");
  });

  test("Prompt Function test", async ({ page }) => {
    const prompValue = "Ayshen";

    page.on("dialog", (dialog) => {
       dialog.accept(prompValue);
       // dialog.dismiss(); 
    });
    await page.getByText("Prompt Alert").click();
    expect(await page.locator("#demo").textContent()).toBe(`Hello ${prompValue}! How are you today?`); 
  });
});
