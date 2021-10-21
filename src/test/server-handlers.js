import { rest } from 'msw';

const handlers = [
  rest.get('https://api.github.com/zen', async (req, res, ctx) => {
    return res(ctx.json('Awesome message'));
  }),
];

export { handlers };
