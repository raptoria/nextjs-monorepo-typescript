import '@testing-library/jest-dom/extend-expect';

describe('Mock Service Worker test', () => {
	it.skip('can fetch the MSW test API', async () => {
		expect.assertions(1);
		try {
			const response = await fetch('/api/test');
			const info = await response.json();
			expect(info).toEqual({ test: 'value' });
		} catch (e) {
			expect(e).toMatch('error');
		}
	});
});
