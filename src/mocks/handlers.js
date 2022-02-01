import { rest } from 'msw';
import data from './data.json';

export const handlers = [
  rest.get('/api/v1/devices', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
