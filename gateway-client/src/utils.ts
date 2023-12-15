import axios from 'axios';

export async function postToUnary<T>(serviceName: string, methodName: string, data: any, opts: {host: string, port: string}): Promise<T> {
  const response = await axios.post(`${opts.host}:${opts.port}/gateway/unary`, {
    service: serviceName,
    method: methodName,
    data,
  },{ withCredentials: true });
  return response.data;
}
