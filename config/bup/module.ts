import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { BupConfigService } from './service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        BUP_ETH_ADDRESS: Joi.string().required(),
        BUP_POLYGON_ADDRESS: Joi.string().required(),
      }),
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
  ],
  providers: [BupConfigService, ConfigService],
  exports: [BupConfigService, ConfigService],
})
export class BupConfigModule {}
