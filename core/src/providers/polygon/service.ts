import { POSClient } from '@maticnetwork/maticjs';
import { Inject, Injectable } from '@nestjs/common';
import { BupConfigService } from '@config/bup';
import { ERC20 } from '@maticnetwork/maticjs/dist/ts/pos/erc20';

@Injectable()
export class PolygonService {
  constructor(
    @Inject('POLYGON_CLIENT') private readonly posClient: POSClient,
    private readonly bupConfig: BupConfigService,
  ) {
    this.erc20 = this.posClient.erc20(this.bupConfig.ethereumAddress, true);
  }

  private readonly erc20: ERC20;

  async approve(amount: string) {
    const approve = await this.erc20.approve(amount);
    const receipt = approve.getReceipt();

    return receipt;
  }

  getBalance(accountAddress: string) {
    return this.erc20.getBalance(accountAddress);
  }
}
