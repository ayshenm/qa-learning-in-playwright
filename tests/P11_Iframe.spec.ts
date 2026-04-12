import { test, expect } from "@playwright/test";

test.describe("Iframe test", () => {
  test.beforeEach("Iframe praktise DemoQa", async ({ page }) => {
    await page.goto("https://demoqa.com/frames");
    await page.setViewportSize({ width: 1850, height: 1080 });
  });

  test("demoqa iframe test open", async ({ page }) => {
    const frame1 = page.frameLocator("#frame1"); //hjansi frame icinde islem yapacagimizi gosterir

    expect(await frame1.getByText("This is a sample page").textContent()).toBe(
      "This is a sample page",
    ); //frame icindeki elementin gorunur olub olmadigini yoxlayir
  });
});
