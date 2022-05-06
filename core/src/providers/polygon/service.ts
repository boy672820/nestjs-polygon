import { POSClient } from '@maticnetwork/maticjs';
import { Inject, Injectable } from '@nestjs/common';
import { BupConfigService } from '@config/bup';
import { ERC20 } from '@maticnetwork/maticjs/dist/ts/pos/erc20';
import { ethers, Wallet } from 'ethers';
import * as abi from '../../../../abi/bup.json';
import { TransferDto } from './dto/transfer';

@Injectable()
export class PolygonService {
  constructor(
    @Inject('POLYGON_CLIENT') private readonly posClient: POSClient,
    @Inject('POLYGON_SIGNER') private readonly signer: Wallet,
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

  async transfer({ to, value }: TransferDto) {
    const bup = new ethers.Contract(
      this.bupConfig.polygonAddress,
      abi,
      this.signer,
    );

    const tx = await bup.transfer(to, ethers.utils.parseEther(value));

    return tx.wait();
  }
}
