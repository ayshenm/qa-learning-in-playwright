import { test, expect } from "@playwright/test";

test.describe("Actions", () => {
  test("Hover actions", async ({ page }) => {
    await page.goto("https://www.amazon.com/");
    await page.setViewportSize({ width: 1536, height: 738 });
    const singInLink = page.locator("#nav-link-accountList-nav-line-1");
    //wait for the element to be visible before hovering
    await page.waitForSelector("#nav-link-accountList-nav-line-1");
    await singInLink.hover();
    await page.waitForTimeout(3000);

    await page.locator("//span[text()='Watchlist']").hover();
    await page.close();
  });

  test("Right click actions", async ({ page }) => {
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    await page.setViewportSize({ width: 1536, height: 738 });
    const rightClickMe = page.getByText("right click me");
    await rightClickMe.click({ button: "right" }); //sağ tıklama
    await expect(page.getByText("Quit")).toBeVisible();
    const quit = await expect(page.getByText("Quit")).toBeVisible();

    await page.waitForTimeout(3000);
    await page.close();
  });

  test("Double click actions", async ({ page, context }) => {
    await page.goto("https://demoqa.com/buttons");
    await page.setViewportSize({ width: 1536, height: 738 });
    const doubleClickMe = page.getByRole("button", { name: "Double Click Me" });
    await page.waitForTimeout(3000);
    await doubleClickMe.dblclick();
    await expect(page.locator("#doubleClickMessage")).toBeVisible();
    await page.waitForTimeout(3000);
    // await page.close();

    //eyni test govdesinde iki unvana getme
    const page2 = await context.newPage(); //yeni bir sayfa acilir
    await page2.setViewportSize({ width: 1536, height: 738 });
    await page2.goto("https://testautomationpractice.blogspot.com/");
    await page2.evaluate(() => {
      window.scrollBy(0, 700);
    });
    await page2.getByText("Copy Text").dblclick();
    // expect(page2.locator("#field2").inputValue()).toBe("Hello World!"); //soft assertion
    expect(await page2.locator("#field2").inputValue()).toBe("Hello World!"); //hard assertion

    await page.bringToFront(); //ilk sayfaya geri doner
    await page2.waitForTimeout(3000);
    await page.close();
  });

  test("Drag and drop actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setViewportSize({ width: 1536, height: 738 });
    await page.evaluate(() => {
      window.scrollBy(0, 700);
    });
    const sourceElement = page.getByText("Drag me to my target");
    const targetElement = page.getByText("Drop here");
    await sourceElement.dragTo(targetElement);
    const droppedText: string | null = await page
      .locator("#droppable p")
      .textContent(); //null gelme ihtimaline karsin bos string atadik

    expect(droppedText).toBe("Dropped!"); //drag and drop isleminin basarili oldugunu dogrulamak icin assertion yaptik
    await page.waitForTimeout(3000);
    await page.close();
  });

  test("Keyboard actions", async ({ page, context }) => {
    await page.goto("https://testotomasyonu.com/");
    const searchBox = page.locator(".search-label").nth(0);
    await searchBox.fill("Samsung White Smart Phone");

    await page.keyboard.down("Shift");
    for (let i = 0; i < 'phone'.length; i++) {
      await page.keyboard.press("ArrowLeft");
      await page.waitForTimeout(2000);
    }
    await page.keyboard.up("Shift");
    await page.waitForTimeout(2000);

    await page.keyboard.press("Backspace");
    await page.waitForTimeout(2000);
    await page.keyboard.press("W");
    await page.keyboard.press("a");
    await page.keyboard.press("t");
    await page.keyboard.press("c");
    await page.keyboard.press("h");

    await page.keyboard.press("Control+A");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Control+X");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Enter");
    // await page.waitForTimeout(3000);
    await page.close();
  });
});
