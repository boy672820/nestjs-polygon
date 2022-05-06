import { Module } from '@nestjs/common';
import { PolygonModule } from '@providers/polygon';
import { TokenController } from './controller';
import { TokenService } from './service';

@Module({
  imports: [PolygonModule],
  providers: [TokenService],
  controllers: [TokenController],
})
export class TokenModule {}
