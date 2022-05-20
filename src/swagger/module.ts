import { Module } from '@nestjs/common';
import { SwaggerProtectService } from './service';

@Module({
  providers: [SwaggerProtectService],
  exports: [SwaggerProtectService],
})
export class SwaggerProtectModule {}
