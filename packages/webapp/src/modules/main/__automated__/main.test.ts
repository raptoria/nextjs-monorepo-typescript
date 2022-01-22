import 'expect-playwright';

describe('Webapp UI', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000', { timeout: 60000 });
		page.setDefaultTimeout(10000);

		await page.click('text="DAG"');
	});

	it('should be titled "Webapp"', async () => {
		await expect(page.title()).resolves.toMatch('Webapp');
	});

	it('should contain some JSON data', async () => {
		const content = await page.textContent('h1');
		expect(content).toBe('A Flow Chart');
	});
});
