import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BupConfigService {
  constructor(private readonly configService: ConfigService) {}

  get ethereumAddress(): string {
    return this.configService.get<string>('bup.ethereumAddress');
  }

  get polygonAddress(): string {
    return this.configService.get<string>('bup.polygonAddress');
  }
}
