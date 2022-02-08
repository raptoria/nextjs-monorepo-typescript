import { server } from './mocks/server';
console.log('here!');
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
