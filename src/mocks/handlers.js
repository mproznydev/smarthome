import { rest } from 'msw';
import { SmartDeviceDetails } from './data.js';
import { SmartDevices } from './data.js';

export const handlers = [
  rest.get('/api/v1/devices', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SmartDevices));
  }),

  //ogarnac jak id wrzucac i pobierac
  rest.get('/api/v1/devices/{deviceId}', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SmartDeviceDetails));
  }),
];
