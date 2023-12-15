import { Injectable } from '@nestjs/common';
import { GatewayPayload } from './gatewayPayload';
import { Metadata } from 'nice-grpc';
import { Request } from 'express';
import * as clientLib from './client/client';

@Injectable()
export class GatewayService {
  extractMetadata(req: Request): Metadata {
    const jwt = (req.cookies || {})[process.env.GATEWAY_JWT_HEADER];
    const metadata = new Metadata();
    if (jwt) metadata.set('jwt', jwt);
    return metadata;
  }

  async invokeUnary(payload: GatewayPayload): Promise<any> {
    const { service, method, data, metadata } = payload;
    const clss = clientLib[service];
    const instance = new clss();
    const func = instance[method].bind(instance);
    const result = await func(data, metadata);
    return result;
  }
}
