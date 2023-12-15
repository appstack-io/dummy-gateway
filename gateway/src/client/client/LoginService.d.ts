import { Empty } from './google/protobuf/empty';
export interface LoginCreateOneInput {
    platform: string;
    platformLoginId: string;
    platformLoginSecret: string;
    userId: string;
    credentials: Credentials | undefined;
}
export interface Credentials {
    local?: LocalCredentials | undefined;
    google?: GoogleCredentials | undefined;
}
export interface LocalCredentials {
    username: string;
    password: string;
}
export interface GoogleCredentials {
    id: string;
}
export interface Login {
    id: string;
    createdAt: number;
    updatedAt: number;
    platform: string;
    platformLoginId: string;
    platformLoginSecret: string;
    userId: string;
    isNew: boolean;
    credentials: Credentials | undefined;
}
export interface LoginFindOneInput {
    id: string;
}
export interface LoginFindWhereInput {
    platform: string;
    platformLoginId: string;
    platformLoginSecret: string;
}
export interface LoginFindByPlatformIdInput {
    platform: string;
    platformLoginId: string;
}
export interface LoginUpdateOneInput {
    id: string;
    platform: string;
    platformLoginId: string;
    platformLoginSecret: string;
    userId: string;
    credentials: Credentials | undefined;
}
export interface LoginRemoveOneInput {
    id: string;
}
import { Metadata } from 'nice-grpc';
export declare class LoginService {
    private readonly serviceName;
    createOne(data: Partial<LoginCreateOneInput>, metadata?: Metadata): Promise<Login>;
    createOnePublic(data: Partial<LoginCreateOneInput>, metadata?: Metadata): Promise<Login>;
    findOne(data: Partial<LoginFindOneInput>, metadata?: Metadata): Promise<Login>;
    findOnePublic(data: Partial<LoginFindOneInput>, metadata?: Metadata): Promise<Login>;
    findWhere(data: Partial<LoginFindWhereInput>, metadata?: Metadata): Promise<Login>;
    findWherePublic(data: Partial<LoginFindWhereInput>, metadata?: Metadata): Promise<Login>;
    findByPlatformId(data: Partial<LoginFindByPlatformIdInput>, metadata?: Metadata): Promise<Login>;
    findByPlatformIdPublic(data: Partial<LoginFindByPlatformIdInput>, metadata?: Metadata): Promise<Login>;
    updateOne(data: Partial<LoginUpdateOneInput>, metadata?: Metadata): Promise<Login>;
    updateOnePublic(data: Partial<LoginUpdateOneInput>, metadata?: Metadata): Promise<Login>;
    removeOne(data: Partial<LoginRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
    removeOnePublic(data: Partial<LoginRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
}
