import { PolygonConfigService } from '@config/polygon';
import { ethers } from 'ethers';

export const signer = {
  provide: 'POLYGON_SIGNER',
  inject: [PolygonConfigService],
  useFactory: async (polygonConfig: PolygonConfigService) => {
    const provider = new ethers.providers.JsonRpcProvider(polygonConfig.rpc);
    await provider.ready;

    const signer = new ethers.Wallet(polygonConfig.basePrivkey, provider);

    return signer;
  },
};
