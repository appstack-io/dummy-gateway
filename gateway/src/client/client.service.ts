import { Injectable } from '@nestjs/common';
import { createChannel, createClient } from 'nice-grpc';
import * as clientLib from './combined';
import { DynamicInvocationInternal } from './types';

@Injectable()
export class ClientService {
  getClient<C>(T: any, opts: { host: string; port: string }): C {
    const channel = createChannel(`${opts.host}:${opts.port}`);
    return createClient(T, channel) as C;
  }

  async invokeUnaryInernal(
    payload: DynamicInvocationInternal,
    opts: { host: string; port: string },
  ): Promise<any> {
    const { service, method, data } = payload;
    const definition = clientLib[`${service}Definition`];
    const client = this.getClient(definition, opts);
    const result = await client[method](data);
    return result;
  }
}
