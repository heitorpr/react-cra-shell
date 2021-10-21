// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
import '@testing-library/jest-dom';
import { server } from 'test/server';

// we don't need analytics in tests
jest.mock('firebase/analytics');

// make debug output for TestingLibrary Errors larger
process.env.DEBUG_PRINT_LIMIT = 15000;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
