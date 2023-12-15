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

import { postToUnary } from './utils';

export class LoginService {
  private readonly serviceName: string = "LoginService";
  private opts = { host: 'http://localhost', port: '5000' }
  
  
    async createOne(data: Partial<LoginCreateOneInput>): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'createOne', data, this.opts);
    }
  
    async findOne(data: Partial<LoginFindOneInput>): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findOne', data, this.opts);
    }
  
    async findWhere(data: Partial<LoginFindWhereInput>): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findWhere', data, this.opts);
    }
  
    async findByPlatformId(data: Partial<LoginFindByPlatformIdInput>): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findByPlatformId', data, this.opts);
    }
  
    async updateOne(data: Partial<LoginUpdateOneInput>): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'updateOne', data, this.opts);
    }
  
    async removeOne(data: Partial<LoginRemoveOneInput>): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, this.opts);
    }
  
}
