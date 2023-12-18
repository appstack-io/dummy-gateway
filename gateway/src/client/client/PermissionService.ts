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
  import { Metadata } from 'nice-grpc';
 
  export class PermissionService {
    private readonly serviceName: string = "PermissionService";
    
    constructor(private opts?: {port?: string, host?: string}){}
    
    
    async createOne(data: Partial<PermissionCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'createOne', data, metadata, this.opts);
    }
  
    async createMany(data: Partial<PermissionCreateManyInput>, metadata: Metadata=new Metadata()): Promise<Permissions> {
      return postToUnary<Permissions>(this.serviceName, 'createMany', data, metadata, this.opts);
    }
  
    async findOne(data: Partial<PermissionFindOneInput>, metadata: Metadata=new Metadata()): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'findOne', data, metadata, this.opts);
    }
  
    async findWhere(data: Partial<PermissionFindWhereInput>, metadata: Metadata=new Metadata()): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'findWhere', data, metadata, this.opts);
    }
  
    async findWhereMany(data: Partial<PermissionFindWhereManyInput>, metadata: Metadata=new Metadata()): Promise<Permissions> {
      return postToUnary<Permissions>(this.serviceName, 'findWhereMany', data, metadata, this.opts);
    }
  
    async findWhereOrStar(data: Partial<PermissionFindWhereOrStarInput>, metadata: Metadata=new Metadata()): Promise<Permission> {
      return postToUnary<Permission>(this.serviceName, 'findWhereOrStar', data, metadata, this.opts);
    }
  
    async findByPermitted(data: Partial<PermissionFindByPermittedInput>, metadata: Metadata=new Metadata()): Promise<PermissionFindByPermittedResult> {
      return postToUnary<PermissionFindByPermittedResult>(this.serviceName, 'findByPermitted', data, metadata, this.opts);
    }
  
    async findByEntity(data: Partial<PermissionFindByEntityInput>, metadata: Metadata=new Metadata()): Promise<PermissionFindByEntityResult> {
      return postToUnary<PermissionFindByEntityResult>(this.serviceName, 'findByEntity', data, metadata, this.opts);
    }
  
    async findAllActions(data: Partial<PermissionFindAllActionsInput>, metadata: Metadata=new Metadata()): Promise<PermissionFindAllActionsResult> {
      return postToUnary<PermissionFindAllActionsResult>(this.serviceName, 'findAllActions', data, metadata, this.opts);
    }
  
    async validateOne(data: Partial<PermissionValidateOneInput>, metadata: Metadata=new Metadata()): Promise<PermissionValidateOneResult> {
      return postToUnary<PermissionValidateOneResult>(this.serviceName, 'validateOne', data, metadata, this.opts);
    }
  
    async removeOne(data: Partial<PermissionRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, metadata, this.opts);
    }
  
    async removeWhere(data: Partial<PermissionRemoveWhereInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeWhere', data, metadata, this.opts);
    }
  
    async removeWhereMany(data: Partial<PermissionRemoveWhereManyInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeWhereMany', data, metadata, this.opts);
    }
  
    async removeAllActions(data: Partial<PermissionRemoveAllActionsInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeAllActions', data, metadata, this.opts);
    }
  
  }
