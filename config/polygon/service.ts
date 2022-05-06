import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PolygonConfigService {
  constructor(private readonly configService: ConfigService) {}

  get baseAddress(): string {
    return this.configService.get<string>('polygon.baseAddress');
  }

  get basePrivkey(): string {
    return this.configService.get<string>('polygon.basePrivkey');
  }

  get rpc(): string {
    return this.configService.get<string>('polygon.rpc');
  }
}
