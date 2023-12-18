import { Empty } from './google/protobuf/empty';

import { Observable } from 'rxjs';

import type { CallContext, CallOptions } from "nice-grpc-common";

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
      : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
      : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
      : Partial<T>;
    

export interface Dummy {
  id: string;
  createdAt: number;
  updatedAt: number;
  text: string;
  isPublic: boolean;
}

export interface DummyCreateOneInput {
  text: string;
  isPublic: boolean;
}

export interface DummyUpdateOneInput {
  id: string;
  text: string;
}

export interface DummyFindOneInput {
  id: string;
}

export interface DummyRemoveOneInput {
  id: string;
}

export interface DummySearchFilter {
  text: string;
}

export interface DummySearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface DummySearchInput {
  filter: DummySearchFilter | undefined;
  opts: DummySearchOpts | undefined;
}

export interface DummySearchResultMeta {
  offset: number;
}

export interface DummySearchResult {
  meta: DummySearchResultMeta | undefined;
  results: Dummy[];
}

export interface DummyJobPayload {
  id: string;
}

export interface PublishJobInput {
  dummyJobPayload: DummyJobPayload | undefined;
  sender: string;
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

export interface LoginCreateOneInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginUpdateOneInput {
  id: string;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
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

export interface LoginRemoveOneInput {
  id: string;
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

export interface UserOnboardingFlags {
  initial: boolean;
}

export interface UserCreateOneInput {
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

export interface UserSearchFilter {
  name: string;
}

export interface UserSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface UserSearchInput {
  filter: UserSearchFilter | undefined;
  opts: UserSearchOpts | undefined;
}

export interface UserSearchResultMeta {
  offset: number;
}

export interface UserSearchResult {
  meta: UserSearchResultMeta | undefined;
  users: User[];
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

export interface AuthorizableAs {
  entity: string;
  entityId: string;
}

export interface Permissions {
  permissions: Permission[];
}

export interface PermissionCreateOneInput {
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

export interface Permitted {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionValidateOneInput {
  entity: string;
  entityId: string;
  action: string;
  permitted: Permitted[];
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

export interface PermissionFindByPermittedFilter {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindByPermittedOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByPermittedInput {
  filter: PermissionFindByPermittedFilter | undefined;
  opts: PermissionFindByPermittedOpts | undefined;
}

export interface PermissionFindByPermittedResultMeta {
  offset: number;
}

export interface PermissionFindByPermittedResult {
  meta: PermissionFindByPermittedResultMeta | undefined;
  results: Permission[];
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

export interface PermissionFindByEntityInput {
  filter: PermissionFindByEntityFilter | undefined;
  opts: PermissionFindByEntityOpts | undefined;
}

export interface PermissionFindByEntityResultMeta {
  offset: number;
}

export interface PermissionFindByEntityResult {
  meta: PermissionFindByEntityResultMeta | undefined;
  results: Permission[];
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

export interface PermissionFindAllActionsInput {
  filter: PermissionFindAllActionsFilter | undefined;
  opts: PermissionFindAllActionsOpts | undefined;
}

export interface PermissionFindAllActionsResultMeta {
  offset: number;
}

export interface PermissionFindAllActionsResult {
  meta: PermissionFindAllActionsResultMeta | undefined;
  results: Permission[];
}

export interface PermissionRemoveAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionRemoveAllActionsInput {
  filter: PermissionRemoveAllActionsFilter | undefined;
}

export interface UserFollowCreateOneInput {
  followerId: string;
  followeeId: string;
}

export interface UserFollowRemoveOneInput {
  id: string;
}

export interface UserFindFollowersFilter {
  followeeId: string;
}

export interface UserFindFollowersOpts {
  limit: number;
  offset: number;
}

export interface UserFindFollowersInput {
  filter: UserFindFollowersFilter | undefined;
  opts: UserFindFollowersOpts | undefined;
}

export interface UserFindFollowersResultMeta {
  offset: number;
}

export interface UserFindFollowersResult {
  meta: UserFindFollowersResultMeta | undefined;
  followers: Follower[];
}

export interface Follower {
  id: string;
  createdAt: number;
  updatedAt: number;
  followeeId: string;
  followerId: string;
}

export interface UserFindFolloweesFilter {
  followerId: string;
}

export interface UserFindFolloweesOpts {
  limit: number;
  offset: number;
}

export interface UserFindFolloweesInput {
  filter: UserFindFolloweesFilter | undefined;
  opts: UserFindFolloweesOpts | undefined;
}

export interface UserFindFolloweesResultMeta {
  offset: number;
}

export interface UserFindFolloweesResult {
  meta: UserFindFolloweesResultMeta | undefined;
  followees: Followee[];
}

export interface Followee {
  id: string;
  createdAt: number;
  updatedAt: number;
  followerId: string;
  followeeId: string;
}

export interface Conversation {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  description: string;
  lastMessageAt: number;
}

export interface ConversationCreateOneInput {
  name: string;
  description: string;
}

export interface ConversationUpdateOneInput {
  id: string;
  name: string;
  description: string;
  lastMessageAt: number;
}

export interface ConversationFindOneInput {
  id: string;
}

export interface ConversationRemoveOneInput {
  id: string;
}

export interface ConversationFindByParticipantFilter {
  participantId: string;
  fromLastMessageAt: number;
}

export interface ConversationFindByParticipantOpts {
  limit: number;
  offset: number;
}

export interface ConversationFindByParticipantInput {
  filter: ConversationFindByParticipantFilter | undefined;
  opts: ConversationFindByParticipantOpts | undefined;
}

export interface ConversationFindByParticipantResultMeta {
  offset: number;
}

export interface ConversationFindByParticipantResult {
  meta: ConversationFindByParticipantResultMeta | undefined;
  results: Conversation[];
}

export interface ConversationParticipant {
  id: string;
  createdAt: number;
  updatedAt: number;
  conversationId: string;
  participantId: string;
  writeableAs: AuthorizableAs | undefined;
}

export interface ConversationParticipantCreateOneInput {
  conversationId: string;
  participantId: string;
}

export interface ConversationParticipantFindOneInput {
  id: string;
}

export interface ConversationParticipantRemoveOneInput {
  id: string;
}

export interface ConversationParticipantFindByConversationFilter {
  conversationId: string;
}

export interface ConversationParticipantFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface ConversationParticipantFindByConversationInput {
  filter: ConversationParticipantFindByConversationFilter | undefined;
  opts: ConversationParticipantFindByConversationOpts | undefined;
}

export interface ConversationParticipantFindByConversationResultMeta {
  offset: number;
}

export interface ConversationParticipantFindByConversationResult {
  meta: ConversationParticipantFindByConversationResultMeta | undefined;
  results: ConversationParticipant[];
}

export interface Message {
  id: string;
  createdAt: number;
  updatedAt: number;
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  sentToIds: string[];
  receivedByIds: string[];
  seenByIds: string[];
  deleted: boolean;
  uniqueness: string;
}

export interface MessageMedia {
  text: string;
}

export interface MessageCreateOneInput {
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  uniqueness: string;
}

export interface MessageUpdateOneInput {
  id: string;
  media: MessageMedia | undefined;
}

export interface MessageFindOneInput {
  id: string;
}

export interface MessageFindUniqueInput {
  uniqueness: string;
}

export interface MessageRemoveOneInput {
  id: string;
}

export interface MessageFindByConversationFilter {
  conversationId: string;
}

export interface MessageFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface MessageFindByConversationInput {
  filter: MessageFindByConversationFilter | undefined;
  opts: MessageFindByConversationOpts | undefined;
}

export interface MessageFindByConversationResultMeta {
  offset: number;
}

export interface MessageFindByConversationResult {
  meta: MessageFindByConversationResultMeta | undefined;
  results: Message[];
}

export interface MessageJobPayload {
  id: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

export interface DummyServiceImplementation<CallContextExt = {}> {
  createOne(request: DummyCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Dummy>>;
  updateOne(request: DummyUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Dummy>>;
  findOne(request: DummyFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Dummy>>;
  removeOne(request: DummyRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  search(request: DummySearchInput, context: CallContext & CallContextExt): Promise<DeepPartial<DummySearchResult>>;
}

export interface DummyServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<DummyCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Dummy>;
  updateOne(request: DeepPartial<DummyUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Dummy>;
  findOne(request: DeepPartial<DummyFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Dummy>;
  removeOne(request: DeepPartial<DummyRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  search(request: DeepPartial<DummySearchInput>, options?: CallOptions & CallOptionsExt): Promise<DummySearchResult>;
}

export interface LoginServiceImplementation<CallContextExt = {}> {
  createOne(request: LoginCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findOne(request: LoginFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findWhere(request: LoginFindWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findByPlatformId(
    request: LoginFindByPlatformIdInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Login>>;
  updateOne(request: LoginUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  removeOne(request: LoginRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}

export interface LoginServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<LoginCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findOne(request: DeepPartial<LoginFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findWhere(request: DeepPartial<LoginFindWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findByPlatformId(
    request: DeepPartial<LoginFindByPlatformIdInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Login>;
  updateOne(request: DeepPartial<LoginUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  removeOne(request: DeepPartial<LoginRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}

export interface UserServiceImplementation<CallContextExt = {}> {
  createOne(request: UserCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  updateOne(request: UserUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  findOne(request: UserFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  findMe(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  removeOne(request: UserRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  search(request: UserSearchInput, context: CallContext & CallContextExt): Promise<DeepPartial<UserSearchResult>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<UserCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  updateOne(request: DeepPartial<UserUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  findOne(request: DeepPartial<UserFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  findMe(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<User>;
  removeOne(request: DeepPartial<UserRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  search(request: DeepPartial<UserSearchInput>, options?: CallOptions & CallOptionsExt): Promise<UserSearchResult>;
}

export interface PermissionServiceImplementation<CallContextExt = {}> {
  createOne(request: PermissionCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
  createMany(
    request: PermissionCreateManyInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Permissions>>;
  findOne(request: PermissionFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
  findWhere(request: PermissionFindWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
  findWhereMany(
    request: PermissionFindWhereManyInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Permissions>>;
  findWhereOrStar(
    request: PermissionFindWhereOrStarInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Permission>>;
  findByPermitted(
    request: PermissionFindByPermittedInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionFindByPermittedResult>>;
  findByEntity(
    request: PermissionFindByEntityInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionFindByEntityResult>>;
  findAllActions(
    request: PermissionFindAllActionsInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionFindAllActionsResult>>;
  validateOne(
    request: PermissionValidateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionValidateOneResult>>;
  removeOne(request: PermissionRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  removeWhere(request: PermissionRemoveWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  removeWhereMany(
    request: PermissionRemoveWhereManyInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  removeAllActions(
    request: PermissionRemoveAllActionsInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
}

export interface PermissionServiceClient<CallOptionsExt = {}> {
  createOne(
    request: DeepPartial<PermissionCreateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permission>;
  createMany(
    request: DeepPartial<PermissionCreateManyInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permissions>;
  findOne(request: DeepPartial<PermissionFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Permission>;
  findWhere(
    request: DeepPartial<PermissionFindWhereInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permission>;
  findWhereMany(
    request: DeepPartial<PermissionFindWhereManyInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permissions>;
  findWhereOrStar(
    request: DeepPartial<PermissionFindWhereOrStarInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Permission>;
  findByPermitted(
    request: DeepPartial<PermissionFindByPermittedInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionFindByPermittedResult>;
  findByEntity(
    request: DeepPartial<PermissionFindByEntityInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionFindByEntityResult>;
  findAllActions(
    request: DeepPartial<PermissionFindAllActionsInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionFindAllActionsResult>;
  validateOne(
    request: DeepPartial<PermissionValidateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionValidateOneResult>;
  removeOne(request: DeepPartial<PermissionRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  removeWhere(request: DeepPartial<PermissionRemoveWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  removeWhereMany(
    request: DeepPartial<PermissionRemoveWhereManyInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  removeAllActions(
    request: DeepPartial<PermissionRemoveAllActionsInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
}

export interface UserFollowServiceImplementation<CallContextExt = {}> {
  createOne(request: UserFollowCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
  removeOne(request: UserFollowRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
  findFollowers(
    request: UserFindFollowersInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UserFindFollowersResult>>;
  findFollowees(
    request: UserFindFolloweesInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UserFindFolloweesResult>>;
}

export interface UserFollowServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<UserFollowCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
  removeOne(request: DeepPartial<UserFollowRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
  findFollowers(
    request: DeepPartial<UserFindFollowersInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UserFindFollowersResult>;
  findFollowees(
    request: DeepPartial<UserFindFolloweesInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UserFindFolloweesResult>;
}

export interface ConversationServiceImplementation<CallContextExt = {}> {
  createOne(
    request: ConversationCreateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Conversation>>;
  updateOne(
    request: ConversationUpdateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Conversation>>;
  findOne(request: ConversationFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Conversation>>;
  removeOne(
    request: ConversationRemoveOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Conversation>>;
  findByParticipant(
    request: ConversationFindByParticipantInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationFindByParticipantResult>>;
}

export interface ConversationServiceClient<CallOptionsExt = {}> {
  createOne(
    request: DeepPartial<ConversationCreateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  updateOne(
    request: DeepPartial<ConversationUpdateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  findOne(
    request: DeepPartial<ConversationFindOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  removeOne(
    request: DeepPartial<ConversationRemoveOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Conversation>;
  findByParticipant(
    request: DeepPartial<ConversationFindByParticipantInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationFindByParticipantResult>;
}

export interface ConversationParticipantServiceImplementation<CallContextExt = {}> {
  createOne(
    request: ConversationParticipantCreateOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipant>>;
  findOne(
    request: ConversationParticipantFindOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipant>>;
  removeOne(
    request: ConversationParticipantRemoveOneInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipant>>;
  findByConversation(
    request: ConversationParticipantFindByConversationInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConversationParticipantFindByConversationResult>>;
}

export interface ConversationParticipantServiceClient<CallOptionsExt = {}> {
  createOne(
    request: DeepPartial<ConversationParticipantCreateOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipant>;
  findOne(
    request: DeepPartial<ConversationParticipantFindOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipant>;
  removeOne(
    request: DeepPartial<ConversationParticipantRemoveOneInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipant>;
  findByConversation(
    request: DeepPartial<ConversationParticipantFindByConversationInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConversationParticipantFindByConversationResult>;
}

export interface MessageServiceImplementation<CallContextExt = {}> {
  createOne(request: MessageCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  updateOne(request: MessageUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  findOne(request: MessageFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  findUnique(request: MessageFindUniqueInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  removeOne(request: MessageRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
  findByConversation(
    request: MessageFindByConversationInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MessageFindByConversationResult>>;
}

export interface MessageServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<MessageCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  updateOne(request: DeepPartial<MessageUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  findOne(request: DeepPartial<MessageFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  findUnique(request: DeepPartial<MessageFindUniqueInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  removeOne(request: DeepPartial<MessageRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
  findByConversation(
    request: DeepPartial<MessageFindByConversationInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MessageFindByConversationResult>;
}

export interface WorkersServiceImplementation<CallContextExt = {}> {
  publishJob(request: PublishJobInput, context: CallContext & CallContextExt): Promise<DeepPartial<PublishJobResult>>;
  healthCheck(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<WorkersHealthCheckResult>>;
}

export interface WorkersServiceClient<CallOptionsExt = {}> {
  publishJob(request: DeepPartial<PublishJobInput>, options?: CallOptions & CallOptionsExt): Promise<PublishJobResult>;
  healthCheck(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<WorkersHealthCheckResult>;
}