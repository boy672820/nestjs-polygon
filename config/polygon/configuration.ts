import { registerAs } from '@nestjs/config';

export default registerAs('polygon', () => ({
  rpc: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.POLYGON_ALCHEMY_KEY}`,
}));
