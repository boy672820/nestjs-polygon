import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApproveDto, DepositDto, TransferDto } from '@providers/polygon/dto';
import { TokenService } from './service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('approve')
  async approve(@Body() { amount }: ApproveDto) {
    try {
      return await this.tokenService.approve(amount);
    } catch (e) {
      console.log(e);

      return null;
    }
  }

  @Post('deposit')
  async deposit(@Body() { amount, accountAddress }: DepositDto) {
    try {
      return await this.tokenService.deposit(amount, accountAddress);
    } catch (e) {
      console.log(e);

      return null;
    }
  }

  @Get('allowance/:accountAddress')
  async allowance(@Param('accountAddress') accountAddress: string) {
    try {
      return await this.tokenService.getAllowance(accountAddress);
    } catch (e) {
      console.log(e);

      return null;
    }
  }

  @Get('balance/:accountAddress')
  async getBalance(@Param('accountAddress') accountAddress: string) {
    try {
      return await this.tokenService.getBalance(accountAddress);
    } catch (e) {
      console.log(e);

      return null;
    }
  }

  @Post('transfer')
  async transfer(@Body() data: TransferDto) {
    try {
      return await this.tokenService.transfer(data);
    } catch (e) {
      console.log(e);

      return null;
    }
  }
}
