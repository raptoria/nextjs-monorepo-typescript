module.exports = {
	browsers: ['chromium'],
	serverOptions: {
		command: 'next start -p 3000',
		port: 3000,
		launchTimeout: 10000,
		debug: true
	},
	launchOptions: {
		headless: false,
		slowMo: 1000
	},
	collectCoverage: true
};
