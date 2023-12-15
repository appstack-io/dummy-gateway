export interface UserFollowCreateOneInput {
    followerId: string;
    followeeId: string;
}
export interface Follower {
    id: string;
    createdAt: number;
    updatedAt: number;
    followeeId: string;
    followerId: string;
}
export interface UserFollowRemoveOneInput {
    id: string;
}
export interface UserFindFollowersInput {
    filter: UserFindFollowersFilter | undefined;
    opts: UserFindFollowersOpts | undefined;
}
export interface UserFindFollowersFilter {
    followeeId: string;
}
export interface UserFindFollowersOpts {
    limit: number;
    offset: number;
}
export interface UserFindFollowersResult {
    meta: UserFindFollowersResultMeta | undefined;
    followers: Follower[];
}
export interface UserFindFollowersResultMeta {
    offset: number;
}
export interface UserFindFolloweesInput {
    filter: UserFindFolloweesFilter | undefined;
    opts: UserFindFolloweesOpts | undefined;
}
export interface UserFindFolloweesFilter {
    followerId: string;
}
export interface UserFindFolloweesOpts {
    limit: number;
    offset: number;
}
export interface UserFindFolloweesResult {
    meta: UserFindFolloweesResultMeta | undefined;
    followees: Followee[];
}
export interface UserFindFolloweesResultMeta {
    offset: number;
}
export interface Followee {
    id: string;
    createdAt: number;
    updatedAt: number;
    followerId: string;
    followeeId: string;
}
import { Metadata } from 'nice-grpc';
export declare class UserFollowService {
    private readonly serviceName;
    createOne(data: Partial<UserFollowCreateOneInput>, metadata?: Metadata): Promise<Follower>;
    createOnePublic(data: Partial<UserFollowCreateOneInput>, metadata?: Metadata): Promise<Follower>;
    removeOne(data: Partial<UserFollowRemoveOneInput>, metadata?: Metadata): Promise<Follower>;
    removeOnePublic(data: Partial<UserFollowRemoveOneInput>, metadata?: Metadata): Promise<Follower>;
    findFollowers(data: Partial<UserFindFollowersInput>, metadata?: Metadata): Promise<UserFindFollowersResult>;
    findFollowersPublic(data: Partial<UserFindFollowersInput>, metadata?: Metadata): Promise<UserFindFollowersResult>;
    findFollowees(data: Partial<UserFindFolloweesInput>, metadata?: Metadata): Promise<UserFindFolloweesResult>;
    findFolloweesPublic(data: Partial<UserFindFolloweesInput>, metadata?: Metadata): Promise<UserFindFolloweesResult>;
}
