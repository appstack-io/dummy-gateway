import * as clientLib from '../combined';
import { Metadata } from 'nice-grpc';

export async function postToUnary<T>(
  serviceName: string,
  methodName: string,
  data: any,
  metadata: Metadata,
): Promise<T> {
  const definition = clientLib[`${serviceName}Definition`];
  const host = serviceName.toLowerCase().replace('service', '');
  const client = this.clientService.getClient(definition, {
    host,
    port: process.env.ASIO_MS_PRIVATE_PORT,
  });
  const result = await client[methodName](data, { metadata });
  return result;
}

export async function postToUnaryPublic<T>(
  serviceName: string,
  methodName: string,
  data: any,
  metadata: Metadata,
): Promise<T> {
  const definition = clientLib[`${serviceName}Definition`];
  const host = serviceName.toLowerCase().replace('service', '');
  const client = this.clientService.getClient(definition, {
    host,
    port: process.env.ASIO_MS_PUBLIC_PORT,
  });
  const result = await client[methodName](data, { metadata });
  return result;
}
