import { Metadata } from 'nice-grpc';
export declare function postToUnary<T>(serviceName: string, methodName: string, data: any, metadata: Metadata): Promise<T>;
export declare function postToUnaryPublic<T>(serviceName: string, methodName: string, data: any, metadata: Metadata): Promise<T>;
