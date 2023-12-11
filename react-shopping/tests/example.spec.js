// @ts-check
import { test, expect } from "@playwright/test";
const URL = "http://127.0.0.1:5173/";
test("APP SHOWS ITEMS", async ({ page }) => {
  await page.goto(URL);
  const productsList = await page.$$(".productsList");

  // Expect a title "to contain" a substring.
  await expect(productsList.length).toBeGreaterThan(0);
});
