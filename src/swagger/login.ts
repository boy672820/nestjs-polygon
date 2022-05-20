import {
  SwaggerProtectLogInDto,
  SwaggerLoginInterface,
} from '@femike/swagger-protect';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { SwaggerProtectService } from './service';

/**
 * Swagger Login
 */
@Injectable()
export class SwaggerLogin implements SwaggerLoginInterface {
  constructor(private readonly swaggerProtector: SwaggerProtectService) {}

  async execute({
    login,
    password,
  }: SwaggerProtectLogInDto): Promise<{ token: string }> {
    const user = await this.swaggerProtector.validateUser(login, password);

    if (!user) {
      return { token: '' };
    }

    return { token: uuid() };
  }
}
