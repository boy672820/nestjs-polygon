import { registerAs } from '@nestjs/config';

export default registerAs('ethereum', () => ({
  baseAddress: process.env.ETH_BASE_ADDRESS,
  basePrivkey: process.env.ETH_BASE_PRIVKEY,
  rpc: `https://eth-goerli.alchemyapi.io/v2/${process.env.ETH_ALCHEMY_KEY}`,
}));
