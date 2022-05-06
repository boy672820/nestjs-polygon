import { Module } from '@nestjs/common';
import { BupConfigModule } from '@config/bup';
import { EthereumConfigModule } from '@config/ethereum';
import { PolygonConfigModule } from '@config/polygon';
import { polygonProviders } from './providers';
import { PolygonService } from './service';

@Module({
  imports: [PolygonConfigModule, EthereumConfigModule, BupConfigModule],
  providers: [PolygonService, ...polygonProviders],
  exports: [PolygonService],
})
export class PolygonModule {}
