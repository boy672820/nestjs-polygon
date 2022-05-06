import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EthereumConfigService {
  constructor(private readonly configService: ConfigService) {}

  get baseAddress(): string {
    return this.configService.get<string>('ethereum.baseAddress');
  }

  get basePrivkey(): string {
    return this.configService.get<string>('ethereum.basePrivkey');
  }

  get rpc(): string {
    return this.configService.get<string>('ethereum.rpc');
  }
}
