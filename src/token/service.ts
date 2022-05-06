import { Injectable } from '@nestjs/common';
import { PolygonService } from '@providers/polygon';
import { TransferDto } from '@providers/polygon/dto';

@Injectable()
export class TokenService {
  constructor(private readonly polygonService: PolygonService) {}

  approve(amount: string) {
    return this.polygonService.approve(amount);
  }

  getBalance(accountAddress: string) {
    return this.polygonService.getBalance(accountAddress);
  }

  transfer(data: TransferDto) {
    return this.polygonService.transfer(data);
  }
}
