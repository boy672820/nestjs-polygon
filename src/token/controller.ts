import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApproveDto } from '@providers/polygon/dto';
import { TokenService } from './service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('approve')
  async approve(@Body() { amount }: ApproveDto) {
    try {
      const receipt = await this.tokenService.approve(amount);

      return receipt;
    } catch (e) {
      console.log(e);

      return null;
    }
  }

  @Get('balance/:accountAddress')
  async getBalance(@Param('accountAddress') accountAddress: string) {
    try {
      const balance = await this.tokenService.getBalance(accountAddress);

      return balance;
    } catch (e) {
      console.log(e);

      return null;
    }
  }
}
