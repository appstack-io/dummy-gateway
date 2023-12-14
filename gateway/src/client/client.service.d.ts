import { DynamicInvocationInternal } from './types';
export declare class ClientService {
    getClient<C>(T: any, opts: {
        host: string;
        port: string;
    }): C;
    invokeUnaryInernal(payload: DynamicInvocationInternal, opts: {
        host: string;
        port: string;
    }): Promise<any>;
}
