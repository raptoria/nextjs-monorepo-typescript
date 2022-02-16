import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
	await page.goto('http://localhost:3000');
	await expect(page.title()).resolves.toMatch('Webapp');
	await page.click('text="DAG"');
	const content = await page.textContent('h1');
	expect(content).toBe('A Flow Chart');
});
