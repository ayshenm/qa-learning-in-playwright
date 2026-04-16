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

  test("iframe kecid test", async ({ page }) => {
    const frame1 = page.frame({ url: "https://demoqa.com/sample" });
    //frame1? null ola biler, ona gore de ? isareti qoyulur, eger frame1 null olmazsa getByText() metodunu isletmeye calisir, eger null olarsa test error vereceyik
    const textframe = await frame1
      ?.getByText("This is a sample page")
      .textContent();

    expect(textframe).toBe("This is a sample page");
  });
});

test.describe("Iframe test testautomation site", () => {
  test.beforeEach("Iframe praktise testautomation", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setViewportSize({ width: 1850, height: 1080 });
    page.evaluate(() => {
      window.scrollBy(0, 800);
    });
  });

  test("testautomation iframe test open", async ({ page }) => {
    const frame3 = page.frameLocator("#frame-one1434677811"); //hjansi frame icinde islem yapacagimizi gosterir
    const name: string = "Ayshen";
    frame3.locator("#RESULT_TextField-0").fill(name);
    expect(await frame3?.locator("#RESULT_TextField-0").inputValue()).toBe(
      name,
    ); //frame icindeki elementin gorunur olub olmadigini yoxlayir
  });

    test("testautomation gender test", async ({ page }) => {
    const frame3 = page.frameLocator("#frame-one1434677811"); //hjansi frame icinde islem yapacagimizi gosterir
    frame3.locator("#RESULT_RadioButton-7").check();
    expect(frame3.locator("#RESULT_RadioButton-7")).toBeChecked(); //frame icindeki elementin gorunur olub olmadigini yoxlayir

    });
});
