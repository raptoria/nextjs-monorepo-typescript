import { waitFor } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Index from '../../../pages';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '',
			pathname: '',
			query: '',
			asPath: ''
		};
	}
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('App', () => {
	beforeAll(() => {
		useRouter.mockImplementationOnce(() => ({
			route: '/',
			pathname: '/',
			query: '',
			asPath: ''
		}));
	});

	beforeEach(() => {
		render(<Index />);
	});

	it('Index contains the expected components', async () => {
		await waitFor(() => {
			expect(screen.getByText('Some content here')).toBeInTheDocument();
		});
	});
	it('Test variable works', async () => {
		expect(process.env.NEXT_PUBLIC_TEST_VAR).toBe('testing 1 2 3');
	});
});
