import { test, expect } from "@playwright/test";

test("File Upload Test", async ({ page }) => {
  await page.goto("https://demoqa.com/upload-download");
  const uploadButton = page.locator("#uploadFile");
  //file upload
  await uploadButton.setInputFiles(
    "C:\\Users\\user\\Desktop\\qa\\uploadfiles\\Ayşən Mirzəyeva(cv).pdf",
  );
  //verify file upload
  expect(await page.locator("#uploadedFilePath").textContent()).toContain(
    "Ayşən Mirzəyeva(cv).pdf",
  );
});
