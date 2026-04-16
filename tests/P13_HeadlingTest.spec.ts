import { test, expect } from "@playwright/test";

test("Heading test", async ({ page, context }) => {
  await page.goto("https://google.com");
  await page.goto("https://wisequarter.com");
  let title = await page.title();
  console.log(`birinci titlem ${title}`);

  await page.goBack();
  await page.waitForTimeout(3000);
  await page.goForward();

  const page2 = await context.newPage();
  await page2.goto("https://babayigit.net");
  title = await page2.title();
  console.log(`ikinci titlem ${title}`);
  await page.bringToFront();
  await page2.close();
  await page.close();
});
