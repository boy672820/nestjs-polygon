import { Module } from '@nestjs/common';
import { AuthService } from './service';
import { AuthController } from './controller';
import { LocalStrategy } from './strategy/local';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
