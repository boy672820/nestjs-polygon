import type { SwaggerGuardInterface } from '@femike/swagger-protect';

/**
 * Swagger Guard
 */
export class SwaggerGuard implements SwaggerGuardInterface {
  async canActivate(token: string): Promise<boolean> {
    console.log(token);
    return true;
    // return await this.service.method(token);
  }
}
