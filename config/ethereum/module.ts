import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { EthereumConfigService } from './service';

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
  providers: [EthereumConfigService, ConfigService],
  exports: [EthereumConfigService, ConfigService],
})
export class EthereumConfigModule {}
