import { POSClient } from '@maticnetwork/maticjs';
import { Inject, Injectable } from '@nestjs/common';
import { BupConfigService } from '@config/bup';
import { ERC20 } from '@maticnetwork/maticjs/dist/ts/pos/erc20';
import { ethers, Wallet } from 'ethers';
import { TransferDto } from './dto/transfer';

@Injectable()
export class PolygonService {
  constructor(
    @Inject('POLYGON_CLIENT') private readonly posClient: POSClient,
    @Inject('POLYGON_SIGNER') private readonly signer: Wallet,
    private readonly bupConfig: BupConfigService,
  ) {
    this.parent = this.posClient.erc20(this.bupConfig.ethereumAddress, true);
    this.child = this.posClient.erc20(this.bupConfig.polygonAddress);
  }

  private readonly parent: ERC20;
  private readonly child: ERC20;

  async approve(amount: string) {
    const value = ethers.utils.parseEther(amount).toString();
    const result = await this.parent.approve(value);
    const receipt = result.getReceipt();

    return receipt;
  }

  async deposit(amount: string, accountAddress: string) {
    const value = ethers.utils.parseEther(amount).toString();
    const result = await this.parent.deposit(value, accountAddress);
    const receipt = result.getReceipt();

    return receipt;
  }

  getAllowance(accountAddress: string) {
    return this.parent.getAllowance(accountAddress);
  }

  getBalance(accountAddress: string) {
    return this.child.getBalance(accountAddress);
  }

  async transfer({ to, amount }: TransferDto) {
    const value = ethers.utils.parseEther(amount).toString();
    const result = await this.parent.transfer(value, to);
    const receipt = result.getReceipt();

    return receipt;
  }
}
