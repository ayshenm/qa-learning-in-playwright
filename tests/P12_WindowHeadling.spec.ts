import { test, expect } from "@playwright/test";

test.describe("Window Handling Tests", () => {
  test.beforeEach("Window Handling practise", async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows");
    await page.setViewportSize({ width: 1850, height: 1080 });
    await page.waitForTimeout(3000);
    page.evaluate(() => {
      window.scroll(0, 500);
    });
  });

  test.skip("New Tab Handling", async ({ page }) => {
    const tabButton = page.locator("#tabButton");
    await tabButton.click();

    const newTabText = page.getByText("This is a sample page");
    await expect(newTabText).toBeVisible(); //xetali olur cunki yeni tab acilir ve o tabda bu text var ama biz o tabda deyilik
  });

  test("test with new tab", async ({ page, context }) => {
    //context-i page-in parentidir, yeni tab acildiqda o tabin contexti yaranir ve biz o contexti istifade ederek yeni tabda is gorule bilerik

    const tabButton = page.locator("#tabButton");

    const pagePromise = context.waitForEvent("page"); //yeni tab acildiqda o tabin yaranmasini gozleyirik
    await tabButton.click();

    const newPage1 = await pagePromise; //yeni tabin yaranmasini gozledikden sonra o tabin page obyektini elde edirik
    await newPage1.waitForLoadState(); //yeni tabin tam yüklənməsini gözləyirik

    const newPage2 = newPage1.getByText("This is a sample page");
    await expect(newPage2).toBeVisible(); //yeni tabda olan textin görünür olduğunu doğruluyoruz
    //yeni tabda is gorule bilerik amma yeni tabda olan elementlere klik etmek istesek o zaman yeni tabin page obyektini elde edirik ve o obyektle is goruruk
    await page.bringToFront();
    await page.waitForTimeout(3000);
    await page.getByText("Elements").click(); //esas tabda olan elementlere klik edirik
  });

  test("test popup with new window", async ({ page, context }) => {
    const popupPromise = page.waitForEvent("popup"); //yeni pencere acildiqda o pencerenin yaranmasini gozleyirik
    await page.getByText("New Window").nth(0).click();

    const popup = await popupPromise;
    popup.waitForLoadState();
    await expect(popup.getByText("This is a sample page")).toBeVisible(); //yeni pencerede olan tex tin görünür olduğunu doğruluyoruz
    await page.bringToFront();
    await page.waitForTimeout(3000);
    await page.close(); //esas pencereyi kapatırıq, yeni pencere aciq qalir
  });
});
