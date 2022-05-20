import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PolygonConfigService {
  constructor(private readonly configService: ConfigService) {}

  get rpc(): string {
    return this.configService.get<string>('polygon.rpc');
  }
}
