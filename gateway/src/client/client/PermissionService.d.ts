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
import { Metadata } from 'nice-grpc';
export declare class PermissionService {
    private readonly serviceName;
    createOne(data: Partial<PermissionCreateOneInput>, metadata?: Metadata): Promise<Permission>;
    createOnePublic(data: Partial<PermissionCreateOneInput>, metadata?: Metadata): Promise<Permission>;
    createMany(data: Partial<PermissionCreateManyInput>, metadata?: Metadata): Promise<Permissions>;
    createManyPublic(data: Partial<PermissionCreateManyInput>, metadata?: Metadata): Promise<Permissions>;
    findOne(data: Partial<PermissionFindOneInput>, metadata?: Metadata): Promise<Permission>;
    findOnePublic(data: Partial<PermissionFindOneInput>, metadata?: Metadata): Promise<Permission>;
    findWhere(data: Partial<PermissionFindWhereInput>, metadata?: Metadata): Promise<Permission>;
    findWherePublic(data: Partial<PermissionFindWhereInput>, metadata?: Metadata): Promise<Permission>;
    findWhereMany(data: Partial<PermissionFindWhereManyInput>, metadata?: Metadata): Promise<Permissions>;
    findWhereManyPublic(data: Partial<PermissionFindWhereManyInput>, metadata?: Metadata): Promise<Permissions>;
    findWhereOrStar(data: Partial<PermissionFindWhereOrStarInput>, metadata?: Metadata): Promise<Permission>;
    findWhereOrStarPublic(data: Partial<PermissionFindWhereOrStarInput>, metadata?: Metadata): Promise<Permission>;
    findByPermitted(data: Partial<PermissionFindByPermittedInput>, metadata?: Metadata): Promise<PermissionFindByPermittedResult>;
    findByPermittedPublic(data: Partial<PermissionFindByPermittedInput>, metadata?: Metadata): Promise<PermissionFindByPermittedResult>;
    findByEntity(data: Partial<PermissionFindByEntityInput>, metadata?: Metadata): Promise<PermissionFindByEntityResult>;
    findByEntityPublic(data: Partial<PermissionFindByEntityInput>, metadata?: Metadata): Promise<PermissionFindByEntityResult>;
    findAllActions(data: Partial<PermissionFindAllActionsInput>, metadata?: Metadata): Promise<PermissionFindAllActionsResult>;
    findAllActionsPublic(data: Partial<PermissionFindAllActionsInput>, metadata?: Metadata): Promise<PermissionFindAllActionsResult>;
    validateOne(data: Partial<PermissionValidateOneInput>, metadata?: Metadata): Promise<PermissionValidateOneResult>;
    validateOnePublic(data: Partial<PermissionValidateOneInput>, metadata?: Metadata): Promise<PermissionValidateOneResult>;
    removeOne(data: Partial<PermissionRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
    removeOnePublic(data: Partial<PermissionRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
    removeWhere(data: Partial<PermissionRemoveWhereInput>, metadata?: Metadata): Promise<Empty>;
    removeWherePublic(data: Partial<PermissionRemoveWhereInput>, metadata?: Metadata): Promise<Empty>;
    removeWhereMany(data: Partial<PermissionRemoveWhereManyInput>, metadata?: Metadata): Promise<Empty>;
    removeWhereManyPublic(data: Partial<PermissionRemoveWhereManyInput>, metadata?: Metadata): Promise<Empty>;
    removeAllActions(data: Partial<PermissionRemoveAllActionsInput>, metadata?: Metadata): Promise<Empty>;
    removeAllActionsPublic(data: Partial<PermissionRemoveAllActionsInput>, metadata?: Metadata): Promise<Empty>;
}
