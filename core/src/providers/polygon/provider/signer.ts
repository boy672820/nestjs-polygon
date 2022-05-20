import { PolygonConfigService } from '@config/polygon';
import { ethers } from 'ethers';
import { EthereumConfigService } from '@config/ethereum';

export const signer = {
  provide: 'POLYGON_SIGNER',
  inject: [PolygonConfigService, EthereumConfigService],
  useFactory: async (
    polygonConfig: PolygonConfigService,
    ethereumConfig: EthereumConfigService,
  ) => {
    const provider = new ethers.providers.JsonRpcProvider(polygonConfig.rpc);
    await provider.ready;

    const signer = new ethers.Wallet(ethereumConfig.basePrivkey, provider);

    return signer;
  },
};
