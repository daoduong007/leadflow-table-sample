import { test, expect } from "@playwright/test";

test("search, status and clear controls work together", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Your pipeline, at a glance." }),
  ).toBeVisible();
  await expect(page.getByRole("status")).toHaveText("Showing 12 of 12 leads");
  await page.getByLabel("Search leads").fill("  MINA  ");
  await expect(page.getByRole("status")).toHaveText("Showing 1 of 12 leads");
  await expect(
    page.getByRole("cell", { name: "Northstar Studio" }),
  ).toBeVisible();
  await page.getByLabel("Lead status").selectOption("Won");
  await expect(
    page.getByRole("heading", { name: "No matching leads" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.getByRole("status")).toHaveText("Showing 12 of 12 leads");
  await page.getByLabel("Search leads").fill("harbor");
  await expect(page.getByRole("status")).toHaveText("Showing 1 of 12 leads");
  await page.getByLabel("Lead status").selectOption("New");
  await expect(page.getByRole("status")).toHaveText("Showing 1 of 12 leads");
  expect(errors).toEqual([]);
});

test("page stays within viewport and table remains reachable", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await expect(
    page.getByRole("table", { name: "Fictional leads" }),
  ).toBeVisible();
  const dimensions = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
  }));
  expect(dimensions.page).toBeLessThanOrEqual(dimensions.viewport);
  await page.getByLabel("Lead status").selectOption("Proposal");
  await expect(page.getByRole("status")).toHaveText("Showing 3 of 12 leads");
  await page.getByRole("button", { name: "Clear filters" }).click();
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-sample.png`,
    fullPage: true,
  });
});
