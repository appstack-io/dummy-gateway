import { Empty } from './google/protobuf/empty';
export interface PublishJobInput {
    dummyJobPayload: DummyJobPayload | undefined;
    sender: string;
}
export interface DummyJobPayload {
    id: string;
}
export interface PublishJobResult {
    jobId: string;
}
export interface WorkersHealthCheckResult {
    ok: boolean;
}
import { Metadata } from 'nice-grpc';
export declare class WorkersService {
    private readonly serviceName;
    publishJob(data: Partial<PublishJobInput>, metadata?: Metadata): Promise<PublishJobResult>;
    publishJobPublic(data: Partial<PublishJobInput>, metadata?: Metadata): Promise<PublishJobResult>;
    healthCheck(data: Partial<Empty>, metadata?: Metadata): Promise<WorkersHealthCheckResult>;
    healthCheckPublic(data: Partial<Empty>, metadata?: Metadata): Promise<WorkersHealthCheckResult>;
}
