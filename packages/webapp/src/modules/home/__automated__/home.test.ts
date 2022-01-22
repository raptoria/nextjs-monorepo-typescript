describe('Webapp UI', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3001', {
			waitUntil: 'networkidle'
		});
	});

	it('should be titled "Webapp"', async () => {
		await expect(page.title()).resolves.toMatch('Webapp');
	});

	it('DAG page should contain a header', async () => {
		await page.click('text="DAG"');
		const content = await page.textContent('h1');
		expect(content).toBe('A Flow Chart');
	});
});
