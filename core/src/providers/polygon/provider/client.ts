import { use, POSClient } from '@maticnetwork/maticjs';
import { Web3ClientPlugin } from '@maticnetwork/maticjs-ethers';
import { providers, Wallet } from 'ethers';
import { EthereumConfigService } from '@config/ethereum';
import { PolygonConfigService } from '@config/polygon';

export const polygonClient = {
  provide: 'POLYGON_CLIENT',
  inject: [EthereumConfigService, PolygonConfigService],
  useFactory: async (
    ethereumConfig: EthereumConfigService,
    polygonConfig: PolygonConfigService,
  ) => {
    use(Web3ClientPlugin);

    const posClient = new POSClient();

    // Ethereum rpc
    const parentProvider = new providers.JsonRpcProvider(ethereumConfig.rpc);
    await parentProvider.ready;

    // Polygon rpc
    const childProvider = new providers.JsonRpcProvider(polygonConfig.rpc);
    await childProvider.ready;

    await posClient.init({
      network: 'testnet',
      version: 'mumbai',
      parent: {
        provider: new Wallet(ethereumConfig.basePrivkey, parentProvider),
        defaultConfig: {
          from: ethereumConfig.baseAddress,
        },
      },
      child: {
        provider: new Wallet(polygonConfig.basePrivkey, childProvider),
        defaultConfig: {
          from: polygonConfig.baseAddress,
        },
      },
    });

    return posClient;
  },
};
