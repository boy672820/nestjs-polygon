import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { PolygonConfigService } from './service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        ETH_BASE_ADDRESS: Joi.string().required(),
        ETH_BASE_PRIVKEY: Joi.string().required(),
      }),
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
  ],
  providers: [PolygonConfigService, ConfigService],
  exports: [PolygonConfigService, ConfigService],
})
export class PolygonConfigModule {}
