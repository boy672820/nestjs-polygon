import { registerAs } from '@nestjs/config';

export default registerAs('bup', () => ({
  ethereumAddress: process.env.BUP_ETH_ADDRESS,
  polygonAddress: process.env.BUP_POLYGON_ADDRESS,
}));
