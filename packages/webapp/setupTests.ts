import { server } from './mocks/server';
import 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
