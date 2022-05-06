import { registerAs } from '@nestjs/config';

export default registerAs('polygon', () => ({
  baseAddress: process.env.POLYGON_BASE_ADDRESS,
  basePrivkey: process.env.POLYGON_BASE_PRIVKEY,
  rpc: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.POLYGON_ALCHEMY_KEY}`,
}));
