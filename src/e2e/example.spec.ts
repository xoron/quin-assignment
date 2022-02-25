import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:1234");
});

test.describe("Moonshot Calendar Inc.", () => {
  test("can make an order", async ({ page }) => {
    await page.pause();
    
    // need to create some e2e tests here
  });
});
