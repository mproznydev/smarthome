import { rest } from 'msw';
import { SmartDeviceDetails } from './data.js';
import { SmartDevices } from './data.js';

export const handlers = [
  rest.get('/api/v1/devices', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SmartDevices));
  }),

  rest.get('/api/v1/devices/:id', (req, res, ctx) => {
    const deviceId = req.params.id;
    const searchingDevice = SmartDeviceDetails.find((device) => device.id === deviceId);
    return res(ctx.status(200), ctx.json(searchingDevice));
  }),
];
