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

import { postToUnary } from './utils';

export class UserFollowService {
  private readonly serviceName: string = "UserFollowService";
  private opts = { host: 'aaa', port: '0' }
  
  
    async createOne(data: Partial<UserFollowCreateOneInput>): Promise<Follower> {
      return postToUnary<Follower>(this.serviceName, 'createOne', data, this.opts);
    }
  
    async removeOne(data: Partial<UserFollowRemoveOneInput>): Promise<Follower> {
      return postToUnary<Follower>(this.serviceName, 'removeOne', data, this.opts);
    }
  
    async findFollowers(data: Partial<UserFindFollowersInput>): Promise<UserFindFollowersResult> {
      return postToUnary<UserFindFollowersResult>(this.serviceName, 'findFollowers', data, this.opts);
    }
  
    async findFollowees(data: Partial<UserFindFolloweesInput>): Promise<UserFindFolloweesResult> {
      return postToUnary<UserFindFolloweesResult>(this.serviceName, 'findFollowees', data, this.opts);
    }
  
}
