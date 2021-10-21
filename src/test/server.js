import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './server-handlers.js';

const server = setupServer(...handlers);
export { server, rest };
