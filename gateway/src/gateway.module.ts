import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';
import { ClientModule } from './client';

@Module({
  imports: [ClientModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
