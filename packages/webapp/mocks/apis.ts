import { rest } from 'msw';

export const mockApiHandlers = [
	rest.get('/api/test', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				test: 'value'
			})
		);
	})
];
