import { Module } from '@nestjs/common';
import { CoreModule } from '@core/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/module';
import { UserModule } from './user/module';
import { TokenModule } from './token/module';
import { SwaggerProtect } from '@femike/swagger-protect';
import { SwaggerLogin } from './swagger/login';
import { SwaggerProtectModule } from './swagger/module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    UserModule,
    TokenModule,
    SwaggerProtectModule,
    SwaggerProtect.forRootAsync<'express'>({
      imports: [SwaggerProtectModule],
      useFactory: () => ({
        guard: () => {},
        logIn: SwaggerLogin,
        useUI: true,
      }),
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
