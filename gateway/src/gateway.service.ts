import { Injectable } from '@nestjs/common';
import { GatewayPayload } from './gatewayPayload';
import { Metadata } from 'nice-grpc';
import { Request } from 'express';
import * as clientLib from './client';
import { ClientService } from './client';

@Injectable()
export class GatewayService {
  constructor(private clientService: ClientService) {}

  extractMetadata(req: Request): Metadata {
    const jwt = (req.cookies || {})[process.env.GATEWAY_JWT_HEADER];
    const metadata = new Metadata();
    if (jwt) metadata.set('jwt', jwt);
    return metadata;
  }

  async invokeUnary(payload: GatewayPayload): Promise<any> {
    const { service, method, data, metadata } = payload;
    const definition = clientLib[`${service}Definition`];
    const host = service.toLowerCase().replace('service', '');
    const client = this.clientService.getClient(definition, {
      host,
      port: process.env.ASIO_MS_PUBLIC_PORT,
    });
    const result = await client[method](data, { metadata });
    return result;
  }
}
