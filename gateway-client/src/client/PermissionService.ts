import { Empty } from './google/protobuf/empty';
export interface PermissionCreateOneInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface Permission {
  id: string;
  createdAt: number;
  updatedAt: number;
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionCreateManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface Permissions {
  permissions: Permission[];
}

export interface PermissionFindOneInput {
  id: string;
}

export interface PermissionFindWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindWhereOrStarInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindByPermittedInput {
  filter: PermissionFindByPermittedFilter | undefined;
  opts: PermissionFindByPermittedOpts | undefined;
}

export interface PermissionFindByPermittedFilter {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindByPermittedOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByPermittedResult {
  meta: PermissionFindByPermittedResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindByPermittedResultMeta {
  offset: number;
}

export interface PermissionFindByEntityInput {
  filter: PermissionFindByEntityFilter | undefined;
  opts: PermissionFindByEntityOpts | undefined;
}

export interface PermissionFindByEntityFilter {
  entity: string;
  entityId: string;
  action: string;
}

export interface PermissionFindByEntityOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByEntityResult {
  meta: PermissionFindByEntityResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindByEntityResultMeta {
  offset: number;
}

export interface PermissionFindAllActionsInput {
  filter: PermissionFindAllActionsFilter | undefined;
  opts: PermissionFindAllActionsOpts | undefined;
}

export interface PermissionFindAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindAllActionsOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindAllActionsResult {
  meta: PermissionFindAllActionsResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindAllActionsResultMeta {
  offset: number;
}

export interface PermissionValidateOneInput {
  entity: string;
  entityId: string;
  action: string;
  permitted: Permitted[];
}

export interface Permitted {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionValidateOneResult {
  validated: boolean;
}

export interface PermissionRemoveOneInput {
  id: string;
}

export interface PermissionRemoveWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionRemoveWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionRemoveAllActionsInput {
  filter: PermissionRemoveAllActionsFilter | undefined;
}

export interface PermissionRemoveAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

import { postToUnary } from './utils';

export class PermissionService {
  private readonly serviceName: string = "PermissionService";
  private opts = { host: 'aaa', port: '0' }
  
  
    async createOne(data: Partial<PermissionCreateOneInput>): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'createOne', data, this.opts);
    }
  
    async createMany(data: Partial<PermissionCreateManyInput>): Promise<Permissions> {
      return postToUnary<Permissions>(this.serviceName, 'createMany', data, this.opts);
    }
  
    async findOne(data: Partial<PermissionFindOneInput>): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'findOne', data, this.opts);
    }
  
    async findWhere(data: Partial<PermissionFindWhereInput>): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'findWhere', data, this.opts);
    }
  
    async findWhereMany(data: Partial<PermissionFindWhereManyInput>): Promise<Permissions> {
      return postToUnary<Permissions>(this.serviceName, 'findWhereMany', data, this.opts);
    }
  
    async findWhereOrStar(data: Partial<PermissionFindWhereOrStarInput>): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'findWhereOrStar', data, this.opts);
    }
  
    async findByPermitted(data: Partial<PermissionFindByPermittedInput>): Promise<PermissionFindByPermittedResult> {
      return postToUnary<PermissionFindByPermittedResult>(this.serviceName, 'findByPermitted', data, this.opts);
    }
  
    async findByEntity(data: Partial<PermissionFindByEntityInput>): Promise<PermissionFindByEntityResult> {
      return postToUnary<PermissionFindByEntityResult>(this.serviceName, 'findByEntity', data, this.opts);
    }
  
    async findAllActions(data: Partial<PermissionFindAllActionsInput>): Promise<PermissionFindAllActionsResult> {
      return postToUnary<PermissionFindAllActionsResult>(this.serviceName, 'findAllActions', data, this.opts);
    }
  
    async validateOne(data: Partial<PermissionValidateOneInput>): Promise<PermissionValidateOneResult> {
      return postToUnary<PermissionValidateOneResult>(this.serviceName, 'validateOne', data, this.opts);
    }
  
    async removeOne(data: Partial<PermissionRemoveOneInput>): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, this.opts);
    }
  
    async removeWhere(data: Partial<PermissionRemoveWhereInput>): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeWhere', data, this.opts);
    }
  
    async removeWhereMany(data: Partial<PermissionRemoveWhereManyInput>): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeWhereMany', data, this.opts);
    }
  
    async removeAllActions(data: Partial<PermissionRemoveAllActionsInput>): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeAllActions', data, this.opts);
    }
  
}
