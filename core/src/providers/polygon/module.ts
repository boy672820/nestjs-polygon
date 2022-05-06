import { Module } from '@nestjs/common';
import { BupConfigModule } from '@config/bup';
import { EthereumConfigModule } from '@config/ethereum';
import { PolygonConfigModule } from '@config/polygon';
import { polygonClient } from './provider';
import { PolygonService } from './service';

@Module({
  imports: [PolygonConfigModule, EthereumConfigModule, BupConfigModule],
  providers: [PolygonService, polygonClient],
  exports: [PolygonService],
})
export class PolygonModule {}
