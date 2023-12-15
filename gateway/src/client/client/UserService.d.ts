import { Empty } from './google/protobuf/empty';
export interface UserCreateOneInput {
    name: string;
    email: string;
    photo: string;
    onboardingFlags: UserOnboardingFlags | undefined;
}
export interface UserOnboardingFlags {
    initial: boolean;
}
export interface User {
    id: string;
    createdAt: number;
    updatedAt: number;
    name: string;
    email: string;
    photo: string;
    onboardingFlags: UserOnboardingFlags | undefined;
}
export interface UserUpdateOneInput {
    id: string;
    name: string;
    email: string;
    photo: string;
    onboardingFlags: UserOnboardingFlags | undefined;
}
export interface UserFindOneInput {
    id: string;
}
export interface UserRemoveOneInput {
    id: string;
}
export interface UserSearchInput {
    filter: UserSearchFilter | undefined;
    opts: UserSearchOpts | undefined;
}
export interface UserSearchFilter {
    name: string;
}
export interface UserSearchOpts {
    limit: number;
    offset: number;
    waitForSync: boolean;
}
export interface UserSearchResult {
    meta: UserSearchResultMeta | undefined;
    users: User[];
}
export interface UserSearchResultMeta {
    offset: number;
}
import { Metadata } from 'nice-grpc';
export declare class UserService {
    private readonly serviceName;
    createOne(data: Partial<UserCreateOneInput>, metadata?: Metadata): Promise<User>;
    createOnePublic(data: Partial<UserCreateOneInput>, metadata?: Metadata): Promise<User>;
    updateOne(data: Partial<UserUpdateOneInput>, metadata?: Metadata): Promise<User>;
    updateOnePublic(data: Partial<UserUpdateOneInput>, metadata?: Metadata): Promise<User>;
    findOne(data: Partial<UserFindOneInput>, metadata?: Metadata): Promise<User>;
    findOnePublic(data: Partial<UserFindOneInput>, metadata?: Metadata): Promise<User>;
    findMe(data: Partial<Empty>, metadata?: Metadata): Promise<User>;
    findMePublic(data: Partial<Empty>, metadata?: Metadata): Promise<User>;
    removeOne(data: Partial<UserRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
    removeOnePublic(data: Partial<UserRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
    search(data: Partial<UserSearchInput>, metadata?: Metadata): Promise<UserSearchResult>;
    searchPublic(data: Partial<UserSearchInput>, metadata?: Metadata): Promise<UserSearchResult>;
}
