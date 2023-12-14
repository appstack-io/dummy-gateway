import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "main";
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
export declare const Dummy: {
    encode(message: Dummy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Dummy;
    fromJSON(object: any): Dummy;
    toJSON(message: Dummy): unknown;
    create(base?: DeepPartial<Dummy>): Dummy;
    fromPartial(object: DeepPartial<Dummy>): Dummy;
};
export declare const DummyCreateOneInput: {
    encode(message: DummyCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummyCreateOneInput;
    fromJSON(object: any): DummyCreateOneInput;
    toJSON(message: DummyCreateOneInput): unknown;
    create(base?: DeepPartial<DummyCreateOneInput>): DummyCreateOneInput;
    fromPartial(object: DeepPartial<DummyCreateOneInput>): DummyCreateOneInput;
};
export declare const DummyUpdateOneInput: {
    encode(message: DummyUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummyUpdateOneInput;
    fromJSON(object: any): DummyUpdateOneInput;
    toJSON(message: DummyUpdateOneInput): unknown;
    create(base?: DeepPartial<DummyUpdateOneInput>): DummyUpdateOneInput;
    fromPartial(object: DeepPartial<DummyUpdateOneInput>): DummyUpdateOneInput;
};
export declare const DummyFindOneInput: {
    encode(message: DummyFindOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummyFindOneInput;
    fromJSON(object: any): DummyFindOneInput;
    toJSON(message: DummyFindOneInput): unknown;
    create(base?: DeepPartial<DummyFindOneInput>): DummyFindOneInput;
    fromPartial(object: DeepPartial<DummyFindOneInput>): DummyFindOneInput;
};
export declare const DummyRemoveOneInput: {
    encode(message: DummyRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummyRemoveOneInput;
    fromJSON(object: any): DummyRemoveOneInput;
    toJSON(message: DummyRemoveOneInput): unknown;
    create(base?: DeepPartial<DummyRemoveOneInput>): DummyRemoveOneInput;
    fromPartial(object: DeepPartial<DummyRemoveOneInput>): DummyRemoveOneInput;
};
export declare const DummySearchFilter: {
    encode(message: DummySearchFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchFilter;
    fromJSON(object: any): DummySearchFilter;
    toJSON(message: DummySearchFilter): unknown;
    create(base?: DeepPartial<DummySearchFilter>): DummySearchFilter;
    fromPartial(object: DeepPartial<DummySearchFilter>): DummySearchFilter;
};
export declare const DummySearchOpts: {
    encode(message: DummySearchOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchOpts;
    fromJSON(object: any): DummySearchOpts;
    toJSON(message: DummySearchOpts): unknown;
    create(base?: DeepPartial<DummySearchOpts>): DummySearchOpts;
    fromPartial(object: DeepPartial<DummySearchOpts>): DummySearchOpts;
};
export declare const DummySearchInput: {
    encode(message: DummySearchInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchInput;
    fromJSON(object: any): DummySearchInput;
    toJSON(message: DummySearchInput): unknown;
    create(base?: DeepPartial<DummySearchInput>): DummySearchInput;
    fromPartial(object: DeepPartial<DummySearchInput>): DummySearchInput;
};
export declare const DummySearchResultMeta: {
    encode(message: DummySearchResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResultMeta;
    fromJSON(object: any): DummySearchResultMeta;
    toJSON(message: DummySearchResultMeta): unknown;
    create(base?: DeepPartial<DummySearchResultMeta>): DummySearchResultMeta;
    fromPartial(object: DeepPartial<DummySearchResultMeta>): DummySearchResultMeta;
};
export declare const DummySearchResult: {
    encode(message: DummySearchResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResult;
    fromJSON(object: any): DummySearchResult;
    toJSON(message: DummySearchResult): unknown;
    create(base?: DeepPartial<DummySearchResult>): DummySearchResult;
    fromPartial(object: DeepPartial<DummySearchResult>): DummySearchResult;
};
export declare const DummyJobPayload: {
    encode(message: DummyJobPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DummyJobPayload;
    fromJSON(object: any): DummyJobPayload;
    toJSON(message: DummyJobPayload): unknown;
    create(base?: DeepPartial<DummyJobPayload>): DummyJobPayload;
    fromPartial(object: DeepPartial<DummyJobPayload>): DummyJobPayload;
};
export declare const PublishJobInput: {
    encode(message: PublishJobInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobInput;
    fromJSON(object: any): PublishJobInput;
    toJSON(message: PublishJobInput): unknown;
    create(base?: DeepPartial<PublishJobInput>): PublishJobInput;
    fromPartial(object: DeepPartial<PublishJobInput>): PublishJobInput;
};
export declare const Login: {
    encode(message: Login, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Login;
    fromJSON(object: any): Login;
    toJSON(message: Login): unknown;
    create(base?: DeepPartial<Login>): Login;
    fromPartial(object: DeepPartial<Login>): Login;
};
export declare const Credentials: {
    encode(message: Credentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Credentials;
    fromJSON(object: any): Credentials;
    toJSON(message: Credentials): unknown;
    create(base?: DeepPartial<Credentials>): Credentials;
    fromPartial(object: DeepPartial<Credentials>): Credentials;
};
export declare const LocalCredentials: {
    encode(message: LocalCredentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalCredentials;
    fromJSON(object: any): LocalCredentials;
    toJSON(message: LocalCredentials): unknown;
    create(base?: DeepPartial<LocalCredentials>): LocalCredentials;
    fromPartial(object: DeepPartial<LocalCredentials>): LocalCredentials;
};
export declare const GoogleCredentials: {
    encode(message: GoogleCredentials, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleCredentials;
    fromJSON(object: any): GoogleCredentials;
    toJSON(message: GoogleCredentials): unknown;
    create(base?: DeepPartial<GoogleCredentials>): GoogleCredentials;
    fromPartial(object: DeepPartial<GoogleCredentials>): GoogleCredentials;
};
export declare const LoginCreateOneInput: {
    encode(message: LoginCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginCreateOneInput;
    fromJSON(object: any): LoginCreateOneInput;
    toJSON(message: LoginCreateOneInput): unknown;
    create(base?: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput;
    fromPartial(object: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput;
};
export declare const LoginUpdateOneInput: {
    encode(message: LoginUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginUpdateOneInput;
    fromJSON(object: any): LoginUpdateOneInput;
    toJSON(message: LoginUpdateOneInput): unknown;
    create(base?: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput;
    fromPartial(object: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput;
};
export declare const LoginFindOneInput: {
    encode(message: LoginFindOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindOneInput;
    fromJSON(object: any): LoginFindOneInput;
    toJSON(message: LoginFindOneInput): unknown;
    create(base?: DeepPartial<LoginFindOneInput>): LoginFindOneInput;
    fromPartial(object: DeepPartial<LoginFindOneInput>): LoginFindOneInput;
};
export declare const LoginFindWhereInput: {
    encode(message: LoginFindWhereInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindWhereInput;
    fromJSON(object: any): LoginFindWhereInput;
    toJSON(message: LoginFindWhereInput): unknown;
    create(base?: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput;
    fromPartial(object: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput;
};
export declare const LoginFindByPlatformIdInput: {
    encode(message: LoginFindByPlatformIdInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindByPlatformIdInput;
    fromJSON(object: any): LoginFindByPlatformIdInput;
    toJSON(message: LoginFindByPlatformIdInput): unknown;
    create(base?: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput;
    fromPartial(object: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput;
};
export declare const LoginRemoveOneInput: {
    encode(message: LoginRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoginRemoveOneInput;
    fromJSON(object: any): LoginRemoveOneInput;
    toJSON(message: LoginRemoveOneInput): unknown;
    create(base?: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput;
    fromPartial(object: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput;
};
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create(base?: DeepPartial<User>): User;
    fromPartial(object: DeepPartial<User>): User;
};
export declare const UserOnboardingFlags: {
    encode(message: UserOnboardingFlags, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserOnboardingFlags;
    fromJSON(object: any): UserOnboardingFlags;
    toJSON(message: UserOnboardingFlags): unknown;
    create(base?: DeepPartial<UserOnboardingFlags>): UserOnboardingFlags;
    fromPartial(object: DeepPartial<UserOnboardingFlags>): UserOnboardingFlags;
};
export declare const UserCreateOneInput: {
    encode(message: UserCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateOneInput;
    fromJSON(object: any): UserCreateOneInput;
    toJSON(message: UserCreateOneInput): unknown;
    create(base?: DeepPartial<UserCreateOneInput>): UserCreateOneInput;
    fromPartial(object: DeepPartial<UserCreateOneInput>): UserCreateOneInput;
};
export declare const UserUpdateOneInput: {
    encode(message: UserUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateOneInput;
    fromJSON(object: any): UserUpdateOneInput;
    toJSON(message: UserUpdateOneInput): unknown;
    create(base?: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput;
    fromPartial(object: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput;
};
export declare const UserFindOneInput: {
    encode(message: UserFindOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneInput;
    fromJSON(object: any): UserFindOneInput;
    toJSON(message: UserFindOneInput): unknown;
    create(base?: DeepPartial<UserFindOneInput>): UserFindOneInput;
    fromPartial(object: DeepPartial<UserFindOneInput>): UserFindOneInput;
};
export declare const UserRemoveOneInput: {
    encode(message: UserRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoveOneInput;
    fromJSON(object: any): UserRemoveOneInput;
    toJSON(message: UserRemoveOneInput): unknown;
    create(base?: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput;
    fromPartial(object: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput;
};
export declare const UserSearchFilter: {
    encode(message: UserSearchFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchFilter;
    fromJSON(object: any): UserSearchFilter;
    toJSON(message: UserSearchFilter): unknown;
    create(base?: DeepPartial<UserSearchFilter>): UserSearchFilter;
    fromPartial(object: DeepPartial<UserSearchFilter>): UserSearchFilter;
};
export declare const UserSearchOpts: {
    encode(message: UserSearchOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchOpts;
    fromJSON(object: any): UserSearchOpts;
    toJSON(message: UserSearchOpts): unknown;
    create(base?: DeepPartial<UserSearchOpts>): UserSearchOpts;
    fromPartial(object: DeepPartial<UserSearchOpts>): UserSearchOpts;
};
export declare const UserSearchInput: {
    encode(message: UserSearchInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchInput;
    fromJSON(object: any): UserSearchInput;
    toJSON(message: UserSearchInput): unknown;
    create(base?: DeepPartial<UserSearchInput>): UserSearchInput;
    fromPartial(object: DeepPartial<UserSearchInput>): UserSearchInput;
};
export declare const UserSearchResultMeta: {
    encode(message: UserSearchResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResultMeta;
    fromJSON(object: any): UserSearchResultMeta;
    toJSON(message: UserSearchResultMeta): unknown;
    create(base?: DeepPartial<UserSearchResultMeta>): UserSearchResultMeta;
    fromPartial(object: DeepPartial<UserSearchResultMeta>): UserSearchResultMeta;
};
export declare const UserSearchResult: {
    encode(message: UserSearchResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResult;
    fromJSON(object: any): UserSearchResult;
    toJSON(message: UserSearchResult): unknown;
    create(base?: DeepPartial<UserSearchResult>): UserSearchResult;
    fromPartial(object: DeepPartial<UserSearchResult>): UserSearchResult;
};
export declare const Permission: {
    encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
    fromJSON(object: any): Permission;
    toJSON(message: Permission): unknown;
    create(base?: DeepPartial<Permission>): Permission;
    fromPartial(object: DeepPartial<Permission>): Permission;
};
export declare const AuthorizableAs: {
    encode(message: AuthorizableAs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizableAs;
    fromJSON(object: any): AuthorizableAs;
    toJSON(message: AuthorizableAs): unknown;
    create(base?: DeepPartial<AuthorizableAs>): AuthorizableAs;
    fromPartial(object: DeepPartial<AuthorizableAs>): AuthorizableAs;
};
export declare const Permissions: {
    encode(message: Permissions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Permissions;
    fromJSON(object: any): Permissions;
    toJSON(message: Permissions): unknown;
    create(base?: DeepPartial<Permissions>): Permissions;
    fromPartial(object: DeepPartial<Permissions>): Permissions;
};
export declare const PermissionCreateOneInput: {
    encode(message: PermissionCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateOneInput;
    fromJSON(object: any): PermissionCreateOneInput;
    toJSON(message: PermissionCreateOneInput): unknown;
    create(base?: DeepPartial<PermissionCreateOneInput>): PermissionCreateOneInput;
    fromPartial(object: DeepPartial<PermissionCreateOneInput>): PermissionCreateOneInput;
};
export declare const PermissionCreateManyInput: {
    encode(message: PermissionCreateManyInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateManyInput;
    fromJSON(object: any): PermissionCreateManyInput;
    toJSON(message: PermissionCreateManyInput): unknown;
    create(base?: DeepPartial<PermissionCreateManyInput>): PermissionCreateManyInput;
    fromPartial(object: DeepPartial<PermissionCreateManyInput>): PermissionCreateManyInput;
};
export declare const PermissionFindOneInput: {
    encode(message: PermissionFindOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindOneInput;
    fromJSON(object: any): PermissionFindOneInput;
    toJSON(message: PermissionFindOneInput): unknown;
    create(base?: DeepPartial<PermissionFindOneInput>): PermissionFindOneInput;
    fromPartial(object: DeepPartial<PermissionFindOneInput>): PermissionFindOneInput;
};
export declare const PermissionFindWhereInput: {
    encode(message: PermissionFindWhereInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereInput;
    fromJSON(object: any): PermissionFindWhereInput;
    toJSON(message: PermissionFindWhereInput): unknown;
    create(base?: DeepPartial<PermissionFindWhereInput>): PermissionFindWhereInput;
    fromPartial(object: DeepPartial<PermissionFindWhereInput>): PermissionFindWhereInput;
};
export declare const PermissionFindWhereManyInput: {
    encode(message: PermissionFindWhereManyInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereManyInput;
    fromJSON(object: any): PermissionFindWhereManyInput;
    toJSON(message: PermissionFindWhereManyInput): unknown;
    create(base?: DeepPartial<PermissionFindWhereManyInput>): PermissionFindWhereManyInput;
    fromPartial(object: DeepPartial<PermissionFindWhereManyInput>): PermissionFindWhereManyInput;
};
export declare const PermissionFindWhereOrStarInput: {
    encode(message: PermissionFindWhereOrStarInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereOrStarInput;
    fromJSON(object: any): PermissionFindWhereOrStarInput;
    toJSON(message: PermissionFindWhereOrStarInput): unknown;
    create(base?: DeepPartial<PermissionFindWhereOrStarInput>): PermissionFindWhereOrStarInput;
    fromPartial(object: DeepPartial<PermissionFindWhereOrStarInput>): PermissionFindWhereOrStarInput;
};
export declare const Permitted: {
    encode(message: Permitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Permitted;
    fromJSON(object: any): Permitted;
    toJSON(message: Permitted): unknown;
    create(base?: DeepPartial<Permitted>): Permitted;
    fromPartial(object: DeepPartial<Permitted>): Permitted;
};
export declare const PermissionValidateOneInput: {
    encode(message: PermissionValidateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneInput;
    fromJSON(object: any): PermissionValidateOneInput;
    toJSON(message: PermissionValidateOneInput): unknown;
    create(base?: DeepPartial<PermissionValidateOneInput>): PermissionValidateOneInput;
    fromPartial(object: DeepPartial<PermissionValidateOneInput>): PermissionValidateOneInput;
};
export declare const PermissionValidateOneResult: {
    encode(message: PermissionValidateOneResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneResult;
    fromJSON(object: any): PermissionValidateOneResult;
    toJSON(message: PermissionValidateOneResult): unknown;
    create(base?: DeepPartial<PermissionValidateOneResult>): PermissionValidateOneResult;
    fromPartial(object: DeepPartial<PermissionValidateOneResult>): PermissionValidateOneResult;
};
export declare const PermissionRemoveOneInput: {
    encode(message: PermissionRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveOneInput;
    fromJSON(object: any): PermissionRemoveOneInput;
    toJSON(message: PermissionRemoveOneInput): unknown;
    create(base?: DeepPartial<PermissionRemoveOneInput>): PermissionRemoveOneInput;
    fromPartial(object: DeepPartial<PermissionRemoveOneInput>): PermissionRemoveOneInput;
};
export declare const PermissionRemoveWhereInput: {
    encode(message: PermissionRemoveWhereInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereInput;
    fromJSON(object: any): PermissionRemoveWhereInput;
    toJSON(message: PermissionRemoveWhereInput): unknown;
    create(base?: DeepPartial<PermissionRemoveWhereInput>): PermissionRemoveWhereInput;
    fromPartial(object: DeepPartial<PermissionRemoveWhereInput>): PermissionRemoveWhereInput;
};
export declare const PermissionRemoveWhereManyInput: {
    encode(message: PermissionRemoveWhereManyInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereManyInput;
    fromJSON(object: any): PermissionRemoveWhereManyInput;
    toJSON(message: PermissionRemoveWhereManyInput): unknown;
    create(base?: DeepPartial<PermissionRemoveWhereManyInput>): PermissionRemoveWhereManyInput;
    fromPartial(object: DeepPartial<PermissionRemoveWhereManyInput>): PermissionRemoveWhereManyInput;
};
export declare const PermissionFindByPermittedFilter: {
    encode(message: PermissionFindByPermittedFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedFilter;
    fromJSON(object: any): PermissionFindByPermittedFilter;
    toJSON(message: PermissionFindByPermittedFilter): unknown;
    create(base?: DeepPartial<PermissionFindByPermittedFilter>): PermissionFindByPermittedFilter;
    fromPartial(object: DeepPartial<PermissionFindByPermittedFilter>): PermissionFindByPermittedFilter;
};
export declare const PermissionFindByPermittedOpts: {
    encode(message: PermissionFindByPermittedOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedOpts;
    fromJSON(object: any): PermissionFindByPermittedOpts;
    toJSON(message: PermissionFindByPermittedOpts): unknown;
    create(base?: DeepPartial<PermissionFindByPermittedOpts>): PermissionFindByPermittedOpts;
    fromPartial(object: DeepPartial<PermissionFindByPermittedOpts>): PermissionFindByPermittedOpts;
};
export declare const PermissionFindByPermittedInput: {
    encode(message: PermissionFindByPermittedInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedInput;
    fromJSON(object: any): PermissionFindByPermittedInput;
    toJSON(message: PermissionFindByPermittedInput): unknown;
    create(base?: DeepPartial<PermissionFindByPermittedInput>): PermissionFindByPermittedInput;
    fromPartial(object: DeepPartial<PermissionFindByPermittedInput>): PermissionFindByPermittedInput;
};
export declare const PermissionFindByPermittedResultMeta: {
    encode(message: PermissionFindByPermittedResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResultMeta;
    fromJSON(object: any): PermissionFindByPermittedResultMeta;
    toJSON(message: PermissionFindByPermittedResultMeta): unknown;
    create(base?: DeepPartial<PermissionFindByPermittedResultMeta>): PermissionFindByPermittedResultMeta;
    fromPartial(object: DeepPartial<PermissionFindByPermittedResultMeta>): PermissionFindByPermittedResultMeta;
};
export declare const PermissionFindByPermittedResult: {
    encode(message: PermissionFindByPermittedResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResult;
    fromJSON(object: any): PermissionFindByPermittedResult;
    toJSON(message: PermissionFindByPermittedResult): unknown;
    create(base?: DeepPartial<PermissionFindByPermittedResult>): PermissionFindByPermittedResult;
    fromPartial(object: DeepPartial<PermissionFindByPermittedResult>): PermissionFindByPermittedResult;
};
export declare const PermissionFindByEntityFilter: {
    encode(message: PermissionFindByEntityFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityFilter;
    fromJSON(object: any): PermissionFindByEntityFilter;
    toJSON(message: PermissionFindByEntityFilter): unknown;
    create(base?: DeepPartial<PermissionFindByEntityFilter>): PermissionFindByEntityFilter;
    fromPartial(object: DeepPartial<PermissionFindByEntityFilter>): PermissionFindByEntityFilter;
};
export declare const PermissionFindByEntityOpts: {
    encode(message: PermissionFindByEntityOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityOpts;
    fromJSON(object: any): PermissionFindByEntityOpts;
    toJSON(message: PermissionFindByEntityOpts): unknown;
    create(base?: DeepPartial<PermissionFindByEntityOpts>): PermissionFindByEntityOpts;
    fromPartial(object: DeepPartial<PermissionFindByEntityOpts>): PermissionFindByEntityOpts;
};
export declare const PermissionFindByEntityInput: {
    encode(message: PermissionFindByEntityInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityInput;
    fromJSON(object: any): PermissionFindByEntityInput;
    toJSON(message: PermissionFindByEntityInput): unknown;
    create(base?: DeepPartial<PermissionFindByEntityInput>): PermissionFindByEntityInput;
    fromPartial(object: DeepPartial<PermissionFindByEntityInput>): PermissionFindByEntityInput;
};
export declare const PermissionFindByEntityResultMeta: {
    encode(message: PermissionFindByEntityResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResultMeta;
    fromJSON(object: any): PermissionFindByEntityResultMeta;
    toJSON(message: PermissionFindByEntityResultMeta): unknown;
    create(base?: DeepPartial<PermissionFindByEntityResultMeta>): PermissionFindByEntityResultMeta;
    fromPartial(object: DeepPartial<PermissionFindByEntityResultMeta>): PermissionFindByEntityResultMeta;
};
export declare const PermissionFindByEntityResult: {
    encode(message: PermissionFindByEntityResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResult;
    fromJSON(object: any): PermissionFindByEntityResult;
    toJSON(message: PermissionFindByEntityResult): unknown;
    create(base?: DeepPartial<PermissionFindByEntityResult>): PermissionFindByEntityResult;
    fromPartial(object: DeepPartial<PermissionFindByEntityResult>): PermissionFindByEntityResult;
};
export declare const PermissionFindAllActionsFilter: {
    encode(message: PermissionFindAllActionsFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsFilter;
    fromJSON(object: any): PermissionFindAllActionsFilter;
    toJSON(message: PermissionFindAllActionsFilter): unknown;
    create(base?: DeepPartial<PermissionFindAllActionsFilter>): PermissionFindAllActionsFilter;
    fromPartial(object: DeepPartial<PermissionFindAllActionsFilter>): PermissionFindAllActionsFilter;
};
export declare const PermissionFindAllActionsOpts: {
    encode(message: PermissionFindAllActionsOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsOpts;
    fromJSON(object: any): PermissionFindAllActionsOpts;
    toJSON(message: PermissionFindAllActionsOpts): unknown;
    create(base?: DeepPartial<PermissionFindAllActionsOpts>): PermissionFindAllActionsOpts;
    fromPartial(object: DeepPartial<PermissionFindAllActionsOpts>): PermissionFindAllActionsOpts;
};
export declare const PermissionFindAllActionsInput: {
    encode(message: PermissionFindAllActionsInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsInput;
    fromJSON(object: any): PermissionFindAllActionsInput;
    toJSON(message: PermissionFindAllActionsInput): unknown;
    create(base?: DeepPartial<PermissionFindAllActionsInput>): PermissionFindAllActionsInput;
    fromPartial(object: DeepPartial<PermissionFindAllActionsInput>): PermissionFindAllActionsInput;
};
export declare const PermissionFindAllActionsResultMeta: {
    encode(message: PermissionFindAllActionsResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResultMeta;
    fromJSON(object: any): PermissionFindAllActionsResultMeta;
    toJSON(message: PermissionFindAllActionsResultMeta): unknown;
    create(base?: DeepPartial<PermissionFindAllActionsResultMeta>): PermissionFindAllActionsResultMeta;
    fromPartial(object: DeepPartial<PermissionFindAllActionsResultMeta>): PermissionFindAllActionsResultMeta;
};
export declare const PermissionFindAllActionsResult: {
    encode(message: PermissionFindAllActionsResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResult;
    fromJSON(object: any): PermissionFindAllActionsResult;
    toJSON(message: PermissionFindAllActionsResult): unknown;
    create(base?: DeepPartial<PermissionFindAllActionsResult>): PermissionFindAllActionsResult;
    fromPartial(object: DeepPartial<PermissionFindAllActionsResult>): PermissionFindAllActionsResult;
};
export declare const PermissionRemoveAllActionsFilter: {
    encode(message: PermissionRemoveAllActionsFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsFilter;
    fromJSON(object: any): PermissionRemoveAllActionsFilter;
    toJSON(message: PermissionRemoveAllActionsFilter): unknown;
    create(base?: DeepPartial<PermissionRemoveAllActionsFilter>): PermissionRemoveAllActionsFilter;
    fromPartial(object: DeepPartial<PermissionRemoveAllActionsFilter>): PermissionRemoveAllActionsFilter;
};
export declare const PermissionRemoveAllActionsInput: {
    encode(message: PermissionRemoveAllActionsInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsInput;
    fromJSON(object: any): PermissionRemoveAllActionsInput;
    toJSON(message: PermissionRemoveAllActionsInput): unknown;
    create(base?: DeepPartial<PermissionRemoveAllActionsInput>): PermissionRemoveAllActionsInput;
    fromPartial(object: DeepPartial<PermissionRemoveAllActionsInput>): PermissionRemoveAllActionsInput;
};
export declare const UserFollowCreateOneInput: {
    encode(message: UserFollowCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowCreateOneInput;
    fromJSON(object: any): UserFollowCreateOneInput;
    toJSON(message: UserFollowCreateOneInput): unknown;
    create(base?: DeepPartial<UserFollowCreateOneInput>): UserFollowCreateOneInput;
    fromPartial(object: DeepPartial<UserFollowCreateOneInput>): UserFollowCreateOneInput;
};
export declare const UserFollowRemoveOneInput: {
    encode(message: UserFollowRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowRemoveOneInput;
    fromJSON(object: any): UserFollowRemoveOneInput;
    toJSON(message: UserFollowRemoveOneInput): unknown;
    create(base?: DeepPartial<UserFollowRemoveOneInput>): UserFollowRemoveOneInput;
    fromPartial(object: DeepPartial<UserFollowRemoveOneInput>): UserFollowRemoveOneInput;
};
export declare const UserFindFollowersFilter: {
    encode(message: UserFindFollowersFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersFilter;
    fromJSON(object: any): UserFindFollowersFilter;
    toJSON(message: UserFindFollowersFilter): unknown;
    create(base?: DeepPartial<UserFindFollowersFilter>): UserFindFollowersFilter;
    fromPartial(object: DeepPartial<UserFindFollowersFilter>): UserFindFollowersFilter;
};
export declare const UserFindFollowersOpts: {
    encode(message: UserFindFollowersOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersOpts;
    fromJSON(object: any): UserFindFollowersOpts;
    toJSON(message: UserFindFollowersOpts): unknown;
    create(base?: DeepPartial<UserFindFollowersOpts>): UserFindFollowersOpts;
    fromPartial(object: DeepPartial<UserFindFollowersOpts>): UserFindFollowersOpts;
};
export declare const UserFindFollowersInput: {
    encode(message: UserFindFollowersInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersInput;
    fromJSON(object: any): UserFindFollowersInput;
    toJSON(message: UserFindFollowersInput): unknown;
    create(base?: DeepPartial<UserFindFollowersInput>): UserFindFollowersInput;
    fromPartial(object: DeepPartial<UserFindFollowersInput>): UserFindFollowersInput;
};
export declare const UserFindFollowersResultMeta: {
    encode(message: UserFindFollowersResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResultMeta;
    fromJSON(object: any): UserFindFollowersResultMeta;
    toJSON(message: UserFindFollowersResultMeta): unknown;
    create(base?: DeepPartial<UserFindFollowersResultMeta>): UserFindFollowersResultMeta;
    fromPartial(object: DeepPartial<UserFindFollowersResultMeta>): UserFindFollowersResultMeta;
};
export declare const UserFindFollowersResult: {
    encode(message: UserFindFollowersResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResult;
    fromJSON(object: any): UserFindFollowersResult;
    toJSON(message: UserFindFollowersResult): unknown;
    create(base?: DeepPartial<UserFindFollowersResult>): UserFindFollowersResult;
    fromPartial(object: DeepPartial<UserFindFollowersResult>): UserFindFollowersResult;
};
export declare const Follower: {
    encode(message: Follower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Follower;
    fromJSON(object: any): Follower;
    toJSON(message: Follower): unknown;
    create(base?: DeepPartial<Follower>): Follower;
    fromPartial(object: DeepPartial<Follower>): Follower;
};
export declare const UserFindFolloweesFilter: {
    encode(message: UserFindFolloweesFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesFilter;
    fromJSON(object: any): UserFindFolloweesFilter;
    toJSON(message: UserFindFolloweesFilter): unknown;
    create(base?: DeepPartial<UserFindFolloweesFilter>): UserFindFolloweesFilter;
    fromPartial(object: DeepPartial<UserFindFolloweesFilter>): UserFindFolloweesFilter;
};
export declare const UserFindFolloweesOpts: {
    encode(message: UserFindFolloweesOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesOpts;
    fromJSON(object: any): UserFindFolloweesOpts;
    toJSON(message: UserFindFolloweesOpts): unknown;
    create(base?: DeepPartial<UserFindFolloweesOpts>): UserFindFolloweesOpts;
    fromPartial(object: DeepPartial<UserFindFolloweesOpts>): UserFindFolloweesOpts;
};
export declare const UserFindFolloweesInput: {
    encode(message: UserFindFolloweesInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesInput;
    fromJSON(object: any): UserFindFolloweesInput;
    toJSON(message: UserFindFolloweesInput): unknown;
    create(base?: DeepPartial<UserFindFolloweesInput>): UserFindFolloweesInput;
    fromPartial(object: DeepPartial<UserFindFolloweesInput>): UserFindFolloweesInput;
};
export declare const UserFindFolloweesResultMeta: {
    encode(message: UserFindFolloweesResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResultMeta;
    fromJSON(object: any): UserFindFolloweesResultMeta;
    toJSON(message: UserFindFolloweesResultMeta): unknown;
    create(base?: DeepPartial<UserFindFolloweesResultMeta>): UserFindFolloweesResultMeta;
    fromPartial(object: DeepPartial<UserFindFolloweesResultMeta>): UserFindFolloweesResultMeta;
};
export declare const UserFindFolloweesResult: {
    encode(message: UserFindFolloweesResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResult;
    fromJSON(object: any): UserFindFolloweesResult;
    toJSON(message: UserFindFolloweesResult): unknown;
    create(base?: DeepPartial<UserFindFolloweesResult>): UserFindFolloweesResult;
    fromPartial(object: DeepPartial<UserFindFolloweesResult>): UserFindFolloweesResult;
};
export declare const Followee: {
    encode(message: Followee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Followee;
    fromJSON(object: any): Followee;
    toJSON(message: Followee): unknown;
    create(base?: DeepPartial<Followee>): Followee;
    fromPartial(object: DeepPartial<Followee>): Followee;
};
export declare const Conversation: {
    encode(message: Conversation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Conversation;
    fromJSON(object: any): Conversation;
    toJSON(message: Conversation): unknown;
    create(base?: DeepPartial<Conversation>): Conversation;
    fromPartial(object: DeepPartial<Conversation>): Conversation;
};
export declare const ConversationCreateOneInput: {
    encode(message: ConversationCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationCreateOneInput;
    fromJSON(object: any): ConversationCreateOneInput;
    toJSON(message: ConversationCreateOneInput): unknown;
    create(base?: DeepPartial<ConversationCreateOneInput>): ConversationCreateOneInput;
    fromPartial(object: DeepPartial<ConversationCreateOneInput>): ConversationCreateOneInput;
};
export declare const ConversationUpdateOneInput: {
    encode(message: ConversationUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationUpdateOneInput;
    fromJSON(object: any): ConversationUpdateOneInput;
    toJSON(message: ConversationUpdateOneInput): unknown;
    create(base?: DeepPartial<ConversationUpdateOneInput>): ConversationUpdateOneInput;
    fromPartial(object: DeepPartial<ConversationUpdateOneInput>): ConversationUpdateOneInput;
};
export declare const ConversationFindOneInput: {
    encode(message: ConversationFindOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindOneInput;
    fromJSON(object: any): ConversationFindOneInput;
    toJSON(message: ConversationFindOneInput): unknown;
    create(base?: DeepPartial<ConversationFindOneInput>): ConversationFindOneInput;
    fromPartial(object: DeepPartial<ConversationFindOneInput>): ConversationFindOneInput;
};
export declare const ConversationRemoveOneInput: {
    encode(message: ConversationRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationRemoveOneInput;
    fromJSON(object: any): ConversationRemoveOneInput;
    toJSON(message: ConversationRemoveOneInput): unknown;
    create(base?: DeepPartial<ConversationRemoveOneInput>): ConversationRemoveOneInput;
    fromPartial(object: DeepPartial<ConversationRemoveOneInput>): ConversationRemoveOneInput;
};
export declare const ConversationFindByParticipantFilter: {
    encode(message: ConversationFindByParticipantFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantFilter;
    fromJSON(object: any): ConversationFindByParticipantFilter;
    toJSON(message: ConversationFindByParticipantFilter): unknown;
    create(base?: DeepPartial<ConversationFindByParticipantFilter>): ConversationFindByParticipantFilter;
    fromPartial(object: DeepPartial<ConversationFindByParticipantFilter>): ConversationFindByParticipantFilter;
};
export declare const ConversationFindByParticipantOpts: {
    encode(message: ConversationFindByParticipantOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantOpts;
    fromJSON(object: any): ConversationFindByParticipantOpts;
    toJSON(message: ConversationFindByParticipantOpts): unknown;
    create(base?: DeepPartial<ConversationFindByParticipantOpts>): ConversationFindByParticipantOpts;
    fromPartial(object: DeepPartial<ConversationFindByParticipantOpts>): ConversationFindByParticipantOpts;
};
export declare const ConversationFindByParticipantInput: {
    encode(message: ConversationFindByParticipantInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantInput;
    fromJSON(object: any): ConversationFindByParticipantInput;
    toJSON(message: ConversationFindByParticipantInput): unknown;
    create(base?: DeepPartial<ConversationFindByParticipantInput>): ConversationFindByParticipantInput;
    fromPartial(object: DeepPartial<ConversationFindByParticipantInput>): ConversationFindByParticipantInput;
};
export declare const ConversationFindByParticipantResultMeta: {
    encode(message: ConversationFindByParticipantResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResultMeta;
    fromJSON(object: any): ConversationFindByParticipantResultMeta;
    toJSON(message: ConversationFindByParticipantResultMeta): unknown;
    create(base?: DeepPartial<ConversationFindByParticipantResultMeta>): ConversationFindByParticipantResultMeta;
    fromPartial(object: DeepPartial<ConversationFindByParticipantResultMeta>): ConversationFindByParticipantResultMeta;
};
export declare const ConversationFindByParticipantResult: {
    encode(message: ConversationFindByParticipantResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResult;
    fromJSON(object: any): ConversationFindByParticipantResult;
    toJSON(message: ConversationFindByParticipantResult): unknown;
    create(base?: DeepPartial<ConversationFindByParticipantResult>): ConversationFindByParticipantResult;
    fromPartial(object: DeepPartial<ConversationFindByParticipantResult>): ConversationFindByParticipantResult;
};
export declare const ConversationParticipant: {
    encode(message: ConversationParticipant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipant;
    fromJSON(object: any): ConversationParticipant;
    toJSON(message: ConversationParticipant): unknown;
    create(base?: DeepPartial<ConversationParticipant>): ConversationParticipant;
    fromPartial(object: DeepPartial<ConversationParticipant>): ConversationParticipant;
};
export declare const ConversationParticipantCreateOneInput: {
    encode(message: ConversationParticipantCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantCreateOneInput;
    fromJSON(object: any): ConversationParticipantCreateOneInput;
    toJSON(message: ConversationParticipantCreateOneInput): unknown;
    create(base?: DeepPartial<ConversationParticipantCreateOneInput>): ConversationParticipantCreateOneInput;
    fromPartial(object: DeepPartial<ConversationParticipantCreateOneInput>): ConversationParticipantCreateOneInput;
};
export declare const ConversationParticipantFindOneInput: {
    encode(message: ConversationParticipantFindOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindOneInput;
    fromJSON(object: any): ConversationParticipantFindOneInput;
    toJSON(message: ConversationParticipantFindOneInput): unknown;
    create(base?: DeepPartial<ConversationParticipantFindOneInput>): ConversationParticipantFindOneInput;
    fromPartial(object: DeepPartial<ConversationParticipantFindOneInput>): ConversationParticipantFindOneInput;
};
export declare const ConversationParticipantRemoveOneInput: {
    encode(message: ConversationParticipantRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantRemoveOneInput;
    fromJSON(object: any): ConversationParticipantRemoveOneInput;
    toJSON(message: ConversationParticipantRemoveOneInput): unknown;
    create(base?: DeepPartial<ConversationParticipantRemoveOneInput>): ConversationParticipantRemoveOneInput;
    fromPartial(object: DeepPartial<ConversationParticipantRemoveOneInput>): ConversationParticipantRemoveOneInput;
};
export declare const ConversationParticipantFindByConversationFilter: {
    encode(message: ConversationParticipantFindByConversationFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationFilter;
    fromJSON(object: any): ConversationParticipantFindByConversationFilter;
    toJSON(message: ConversationParticipantFindByConversationFilter): unknown;
    create(base?: DeepPartial<ConversationParticipantFindByConversationFilter>): ConversationParticipantFindByConversationFilter;
    fromPartial(object: DeepPartial<ConversationParticipantFindByConversationFilter>): ConversationParticipantFindByConversationFilter;
};
export declare const ConversationParticipantFindByConversationOpts: {
    encode(message: ConversationParticipantFindByConversationOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationOpts;
    fromJSON(object: any): ConversationParticipantFindByConversationOpts;
    toJSON(message: ConversationParticipantFindByConversationOpts): unknown;
    create(base?: DeepPartial<ConversationParticipantFindByConversationOpts>): ConversationParticipantFindByConversationOpts;
    fromPartial(object: DeepPartial<ConversationParticipantFindByConversationOpts>): ConversationParticipantFindByConversationOpts;
};
export declare const ConversationParticipantFindByConversationInput: {
    encode(message: ConversationParticipantFindByConversationInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationInput;
    fromJSON(object: any): ConversationParticipantFindByConversationInput;
    toJSON(message: ConversationParticipantFindByConversationInput): unknown;
    create(base?: DeepPartial<ConversationParticipantFindByConversationInput>): ConversationParticipantFindByConversationInput;
    fromPartial(object: DeepPartial<ConversationParticipantFindByConversationInput>): ConversationParticipantFindByConversationInput;
};
export declare const ConversationParticipantFindByConversationResultMeta: {
    encode(message: ConversationParticipantFindByConversationResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationResultMeta;
    fromJSON(object: any): ConversationParticipantFindByConversationResultMeta;
    toJSON(message: ConversationParticipantFindByConversationResultMeta): unknown;
    create(base?: DeepPartial<ConversationParticipantFindByConversationResultMeta>): ConversationParticipantFindByConversationResultMeta;
    fromPartial(object: DeepPartial<ConversationParticipantFindByConversationResultMeta>): ConversationParticipantFindByConversationResultMeta;
};
export declare const ConversationParticipantFindByConversationResult: {
    encode(message: ConversationParticipantFindByConversationResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationResult;
    fromJSON(object: any): ConversationParticipantFindByConversationResult;
    toJSON(message: ConversationParticipantFindByConversationResult): unknown;
    create(base?: DeepPartial<ConversationParticipantFindByConversationResult>): ConversationParticipantFindByConversationResult;
    fromPartial(object: DeepPartial<ConversationParticipantFindByConversationResult>): ConversationParticipantFindByConversationResult;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    create(base?: DeepPartial<Message>): Message;
    fromPartial(object: DeepPartial<Message>): Message;
};
export declare const MessageMedia: {
    encode(message: MessageMedia, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageMedia;
    fromJSON(object: any): MessageMedia;
    toJSON(message: MessageMedia): unknown;
    create(base?: DeepPartial<MessageMedia>): MessageMedia;
    fromPartial(object: DeepPartial<MessageMedia>): MessageMedia;
};
export declare const MessageCreateOneInput: {
    encode(message: MessageCreateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageCreateOneInput;
    fromJSON(object: any): MessageCreateOneInput;
    toJSON(message: MessageCreateOneInput): unknown;
    create(base?: DeepPartial<MessageCreateOneInput>): MessageCreateOneInput;
    fromPartial(object: DeepPartial<MessageCreateOneInput>): MessageCreateOneInput;
};
export declare const MessageUpdateOneInput: {
    encode(message: MessageUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageUpdateOneInput;
    fromJSON(object: any): MessageUpdateOneInput;
    toJSON(message: MessageUpdateOneInput): unknown;
    create(base?: DeepPartial<MessageUpdateOneInput>): MessageUpdateOneInput;
    fromPartial(object: DeepPartial<MessageUpdateOneInput>): MessageUpdateOneInput;
};
export declare const MessageFindOneInput: {
    encode(message: MessageFindOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindOneInput;
    fromJSON(object: any): MessageFindOneInput;
    toJSON(message: MessageFindOneInput): unknown;
    create(base?: DeepPartial<MessageFindOneInput>): MessageFindOneInput;
    fromPartial(object: DeepPartial<MessageFindOneInput>): MessageFindOneInput;
};
export declare const MessageFindUniqueInput: {
    encode(message: MessageFindUniqueInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindUniqueInput;
    fromJSON(object: any): MessageFindUniqueInput;
    toJSON(message: MessageFindUniqueInput): unknown;
    create(base?: DeepPartial<MessageFindUniqueInput>): MessageFindUniqueInput;
    fromPartial(object: DeepPartial<MessageFindUniqueInput>): MessageFindUniqueInput;
};
export declare const MessageRemoveOneInput: {
    encode(message: MessageRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageRemoveOneInput;
    fromJSON(object: any): MessageRemoveOneInput;
    toJSON(message: MessageRemoveOneInput): unknown;
    create(base?: DeepPartial<MessageRemoveOneInput>): MessageRemoveOneInput;
    fromPartial(object: DeepPartial<MessageRemoveOneInput>): MessageRemoveOneInput;
};
export declare const MessageFindByConversationFilter: {
    encode(message: MessageFindByConversationFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationFilter;
    fromJSON(object: any): MessageFindByConversationFilter;
    toJSON(message: MessageFindByConversationFilter): unknown;
    create(base?: DeepPartial<MessageFindByConversationFilter>): MessageFindByConversationFilter;
    fromPartial(object: DeepPartial<MessageFindByConversationFilter>): MessageFindByConversationFilter;
};
export declare const MessageFindByConversationOpts: {
    encode(message: MessageFindByConversationOpts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationOpts;
    fromJSON(object: any): MessageFindByConversationOpts;
    toJSON(message: MessageFindByConversationOpts): unknown;
    create(base?: DeepPartial<MessageFindByConversationOpts>): MessageFindByConversationOpts;
    fromPartial(object: DeepPartial<MessageFindByConversationOpts>): MessageFindByConversationOpts;
};
export declare const MessageFindByConversationInput: {
    encode(message: MessageFindByConversationInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationInput;
    fromJSON(object: any): MessageFindByConversationInput;
    toJSON(message: MessageFindByConversationInput): unknown;
    create(base?: DeepPartial<MessageFindByConversationInput>): MessageFindByConversationInput;
    fromPartial(object: DeepPartial<MessageFindByConversationInput>): MessageFindByConversationInput;
};
export declare const MessageFindByConversationResultMeta: {
    encode(message: MessageFindByConversationResultMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResultMeta;
    fromJSON(object: any): MessageFindByConversationResultMeta;
    toJSON(message: MessageFindByConversationResultMeta): unknown;
    create(base?: DeepPartial<MessageFindByConversationResultMeta>): MessageFindByConversationResultMeta;
    fromPartial(object: DeepPartial<MessageFindByConversationResultMeta>): MessageFindByConversationResultMeta;
};
export declare const MessageFindByConversationResult: {
    encode(message: MessageFindByConversationResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResult;
    fromJSON(object: any): MessageFindByConversationResult;
    toJSON(message: MessageFindByConversationResult): unknown;
    create(base?: DeepPartial<MessageFindByConversationResult>): MessageFindByConversationResult;
    fromPartial(object: DeepPartial<MessageFindByConversationResult>): MessageFindByConversationResult;
};
export declare const MessageJobPayload: {
    encode(message: MessageJobPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageJobPayload;
    fromJSON(object: any): MessageJobPayload;
    toJSON(message: MessageJobPayload): unknown;
    create(base?: DeepPartial<MessageJobPayload>): MessageJobPayload;
    fromPartial(object: DeepPartial<MessageJobPayload>): MessageJobPayload;
};
export declare const PublishJobResult: {
    encode(message: PublishJobResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobResult;
    fromJSON(object: any): PublishJobResult;
    toJSON(message: PublishJobResult): unknown;
    create(base?: DeepPartial<PublishJobResult>): PublishJobResult;
    fromPartial(object: DeepPartial<PublishJobResult>): PublishJobResult;
};
export declare const WorkersHealthCheckResult: {
    encode(message: WorkersHealthCheckResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WorkersHealthCheckResult;
    fromJSON(object: any): WorkersHealthCheckResult;
    toJSON(message: WorkersHealthCheckResult): unknown;
    create(base?: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult;
    fromPartial(object: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult;
};
export type DummyServiceDefinition = typeof DummyServiceDefinition;
export declare const DummyServiceDefinition: {
    readonly name: "DummyService";
    readonly fullName: "main.DummyService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: DummyCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DummyCreateOneInput;
                fromJSON(object: any): DummyCreateOneInput;
                toJSON(message: DummyCreateOneInput): unknown;
                create(base?: DeepPartial<DummyCreateOneInput>): DummyCreateOneInput;
                fromPartial(object: DeepPartial<DummyCreateOneInput>): DummyCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Dummy, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Dummy;
                fromJSON(object: any): Dummy;
                toJSON(message: Dummy): unknown;
                create(base?: DeepPartial<Dummy>): Dummy;
                fromPartial(object: DeepPartial<Dummy>): Dummy;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateOne: {
            readonly name: "UpdateOne";
            readonly requestType: {
                encode(message: DummyUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DummyUpdateOneInput;
                fromJSON(object: any): DummyUpdateOneInput;
                toJSON(message: DummyUpdateOneInput): unknown;
                create(base?: DeepPartial<DummyUpdateOneInput>): DummyUpdateOneInput;
                fromPartial(object: DeepPartial<DummyUpdateOneInput>): DummyUpdateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Dummy, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Dummy;
                fromJSON(object: any): Dummy;
                toJSON(message: Dummy): unknown;
                create(base?: DeepPartial<Dummy>): Dummy;
                fromPartial(object: DeepPartial<Dummy>): Dummy;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findOne: {
            readonly name: "FindOne";
            readonly requestType: {
                encode(message: DummyFindOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DummyFindOneInput;
                fromJSON(object: any): DummyFindOneInput;
                toJSON(message: DummyFindOneInput): unknown;
                create(base?: DeepPartial<DummyFindOneInput>): DummyFindOneInput;
                fromPartial(object: DeepPartial<DummyFindOneInput>): DummyFindOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Dummy, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Dummy;
                fromJSON(object: any): Dummy;
                toJSON(message: Dummy): unknown;
                create(base?: DeepPartial<Dummy>): Dummy;
                fromPartial(object: DeepPartial<Dummy>): Dummy;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: DummyRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DummyRemoveOneInput;
                fromJSON(object: any): DummyRemoveOneInput;
                toJSON(message: DummyRemoveOneInput): unknown;
                create(base?: DeepPartial<DummyRemoveOneInput>): DummyRemoveOneInput;
                fromPartial(object: DeepPartial<DummyRemoveOneInput>): DummyRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly search: {
            readonly name: "Search";
            readonly requestType: {
                encode(message: DummySearchInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchInput;
                fromJSON(object: any): DummySearchInput;
                toJSON(message: DummySearchInput): unknown;
                create(base?: DeepPartial<DummySearchInput>): DummySearchInput;
                fromPartial(object: DeepPartial<DummySearchInput>): DummySearchInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: DummySearchResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResult;
                fromJSON(object: any): DummySearchResult;
                toJSON(message: DummySearchResult): unknown;
                create(base?: DeepPartial<DummySearchResult>): DummySearchResult;
                fromPartial(object: DeepPartial<DummySearchResult>): DummySearchResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
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
export type LoginServiceDefinition = typeof LoginServiceDefinition;
export declare const LoginServiceDefinition: {
    readonly name: "LoginService";
    readonly fullName: "main.LoginService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: LoginCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LoginCreateOneInput;
                fromJSON(object: any): LoginCreateOneInput;
                toJSON(message: LoginCreateOneInput): unknown;
                create(base?: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput;
                fromPartial(object: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Login, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Login;
                fromJSON(object: any): Login;
                toJSON(message: Login): unknown;
                create(base?: DeepPartial<Login>): Login;
                fromPartial(object: DeepPartial<Login>): Login;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findOne: {
            readonly name: "FindOne";
            readonly requestType: {
                encode(message: LoginFindOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindOneInput;
                fromJSON(object: any): LoginFindOneInput;
                toJSON(message: LoginFindOneInput): unknown;
                create(base?: DeepPartial<LoginFindOneInput>): LoginFindOneInput;
                fromPartial(object: DeepPartial<LoginFindOneInput>): LoginFindOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Login, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Login;
                fromJSON(object: any): Login;
                toJSON(message: Login): unknown;
                create(base?: DeepPartial<Login>): Login;
                fromPartial(object: DeepPartial<Login>): Login;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findWhere: {
            readonly name: "FindWhere";
            readonly requestType: {
                encode(message: LoginFindWhereInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindWhereInput;
                fromJSON(object: any): LoginFindWhereInput;
                toJSON(message: LoginFindWhereInput): unknown;
                create(base?: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput;
                fromPartial(object: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Login, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Login;
                fromJSON(object: any): Login;
                toJSON(message: Login): unknown;
                create(base?: DeepPartial<Login>): Login;
                fromPartial(object: DeepPartial<Login>): Login;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findByPlatformId: {
            readonly name: "FindByPlatformId";
            readonly requestType: {
                encode(message: LoginFindByPlatformIdInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindByPlatformIdInput;
                fromJSON(object: any): LoginFindByPlatformIdInput;
                toJSON(message: LoginFindByPlatformIdInput): unknown;
                create(base?: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput;
                fromPartial(object: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Login, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Login;
                fromJSON(object: any): Login;
                toJSON(message: Login): unknown;
                create(base?: DeepPartial<Login>): Login;
                fromPartial(object: DeepPartial<Login>): Login;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateOne: {
            readonly name: "UpdateOne";
            readonly requestType: {
                encode(message: LoginUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LoginUpdateOneInput;
                fromJSON(object: any): LoginUpdateOneInput;
                toJSON(message: LoginUpdateOneInput): unknown;
                create(base?: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput;
                fromPartial(object: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Login, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Login;
                fromJSON(object: any): Login;
                toJSON(message: Login): unknown;
                create(base?: DeepPartial<Login>): Login;
                fromPartial(object: DeepPartial<Login>): Login;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: LoginRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): LoginRemoveOneInput;
                fromJSON(object: any): LoginRemoveOneInput;
                toJSON(message: LoginRemoveOneInput): unknown;
                create(base?: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput;
                fromPartial(object: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface LoginServiceImplementation<CallContextExt = {}> {
    createOne(request: LoginCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
    findOne(request: LoginFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
    findWhere(request: LoginFindWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
    findByPlatformId(request: LoginFindByPlatformIdInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
    updateOne(request: LoginUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
    removeOne(request: LoginRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}
export interface LoginServiceClient<CallOptionsExt = {}> {
    createOne(request: DeepPartial<LoginCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
    findOne(request: DeepPartial<LoginFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
    findWhere(request: DeepPartial<LoginFindWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
    findByPlatformId(request: DeepPartial<LoginFindByPlatformIdInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
    updateOne(request: DeepPartial<LoginUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
    removeOne(request: DeepPartial<LoginRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}
export type UserServiceDefinition = typeof UserServiceDefinition;
export declare const UserServiceDefinition: {
    readonly name: "UserService";
    readonly fullName: "main.UserService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: UserCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateOneInput;
                fromJSON(object: any): UserCreateOneInput;
                toJSON(message: UserCreateOneInput): unknown;
                create(base?: DeepPartial<UserCreateOneInput>): UserCreateOneInput;
                fromPartial(object: DeepPartial<UserCreateOneInput>): UserCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: User, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): User;
                fromJSON(object: any): User;
                toJSON(message: User): unknown;
                create(base?: DeepPartial<User>): User;
                fromPartial(object: DeepPartial<User>): User;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateOne: {
            readonly name: "UpdateOne";
            readonly requestType: {
                encode(message: UserUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateOneInput;
                fromJSON(object: any): UserUpdateOneInput;
                toJSON(message: UserUpdateOneInput): unknown;
                create(base?: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput;
                fromPartial(object: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: User, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): User;
                fromJSON(object: any): User;
                toJSON(message: User): unknown;
                create(base?: DeepPartial<User>): User;
                fromPartial(object: DeepPartial<User>): User;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findOne: {
            readonly name: "FindOne";
            readonly requestType: {
                encode(message: UserFindOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneInput;
                fromJSON(object: any): UserFindOneInput;
                toJSON(message: UserFindOneInput): unknown;
                create(base?: DeepPartial<UserFindOneInput>): UserFindOneInput;
                fromPartial(object: DeepPartial<UserFindOneInput>): UserFindOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: User, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): User;
                fromJSON(object: any): User;
                toJSON(message: User): unknown;
                create(base?: DeepPartial<User>): User;
                fromPartial(object: DeepPartial<User>): User;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findMe: {
            readonly name: "FindMe";
            readonly requestType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: User, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): User;
                fromJSON(object: any): User;
                toJSON(message: User): unknown;
                create(base?: DeepPartial<User>): User;
                fromPartial(object: DeepPartial<User>): User;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: UserRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoveOneInput;
                fromJSON(object: any): UserRemoveOneInput;
                toJSON(message: UserRemoveOneInput): unknown;
                create(base?: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput;
                fromPartial(object: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly search: {
            readonly name: "Search";
            readonly requestType: {
                encode(message: UserSearchInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchInput;
                fromJSON(object: any): UserSearchInput;
                toJSON(message: UserSearchInput): unknown;
                create(base?: DeepPartial<UserSearchInput>): UserSearchInput;
                fromPartial(object: DeepPartial<UserSearchInput>): UserSearchInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UserSearchResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResult;
                fromJSON(object: any): UserSearchResult;
                toJSON(message: UserSearchResult): unknown;
                create(base?: DeepPartial<UserSearchResult>): UserSearchResult;
                fromPartial(object: DeepPartial<UserSearchResult>): UserSearchResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
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
export type PermissionServiceDefinition = typeof PermissionServiceDefinition;
export declare const PermissionServiceDefinition: {
    readonly name: "PermissionService";
    readonly fullName: "main.PermissionService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: PermissionCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateOneInput;
                fromJSON(object: any): PermissionCreateOneInput;
                toJSON(message: PermissionCreateOneInput): unknown;
                create(base?: DeepPartial<PermissionCreateOneInput>): PermissionCreateOneInput;
                fromPartial(object: DeepPartial<PermissionCreateOneInput>): PermissionCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
                fromJSON(object: any): Permission;
                toJSON(message: Permission): unknown;
                create(base?: DeepPartial<Permission>): Permission;
                fromPartial(object: DeepPartial<Permission>): Permission;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly createMany: {
            readonly name: "CreateMany";
            readonly requestType: {
                encode(message: PermissionCreateManyInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateManyInput;
                fromJSON(object: any): PermissionCreateManyInput;
                toJSON(message: PermissionCreateManyInput): unknown;
                create(base?: DeepPartial<PermissionCreateManyInput>): PermissionCreateManyInput;
                fromPartial(object: DeepPartial<PermissionCreateManyInput>): PermissionCreateManyInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Permissions, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Permissions;
                fromJSON(object: any): Permissions;
                toJSON(message: Permissions): unknown;
                create(base?: DeepPartial<Permissions>): Permissions;
                fromPartial(object: DeepPartial<Permissions>): Permissions;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findOne: {
            readonly name: "FindOne";
            readonly requestType: {
                encode(message: PermissionFindOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindOneInput;
                fromJSON(object: any): PermissionFindOneInput;
                toJSON(message: PermissionFindOneInput): unknown;
                create(base?: DeepPartial<PermissionFindOneInput>): PermissionFindOneInput;
                fromPartial(object: DeepPartial<PermissionFindOneInput>): PermissionFindOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
                fromJSON(object: any): Permission;
                toJSON(message: Permission): unknown;
                create(base?: DeepPartial<Permission>): Permission;
                fromPartial(object: DeepPartial<Permission>): Permission;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findWhere: {
            readonly name: "FindWhere";
            readonly requestType: {
                encode(message: PermissionFindWhereInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereInput;
                fromJSON(object: any): PermissionFindWhereInput;
                toJSON(message: PermissionFindWhereInput): unknown;
                create(base?: DeepPartial<PermissionFindWhereInput>): PermissionFindWhereInput;
                fromPartial(object: DeepPartial<PermissionFindWhereInput>): PermissionFindWhereInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
                fromJSON(object: any): Permission;
                toJSON(message: Permission): unknown;
                create(base?: DeepPartial<Permission>): Permission;
                fromPartial(object: DeepPartial<Permission>): Permission;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findWhereMany: {
            readonly name: "FindWhereMany";
            readonly requestType: {
                encode(message: PermissionFindWhereManyInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereManyInput;
                fromJSON(object: any): PermissionFindWhereManyInput;
                toJSON(message: PermissionFindWhereManyInput): unknown;
                create(base?: DeepPartial<PermissionFindWhereManyInput>): PermissionFindWhereManyInput;
                fromPartial(object: DeepPartial<PermissionFindWhereManyInput>): PermissionFindWhereManyInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Permissions, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Permissions;
                fromJSON(object: any): Permissions;
                toJSON(message: Permissions): unknown;
                create(base?: DeepPartial<Permissions>): Permissions;
                fromPartial(object: DeepPartial<Permissions>): Permissions;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findWhereOrStar: {
            readonly name: "FindWhereOrStar";
            readonly requestType: {
                encode(message: PermissionFindWhereOrStarInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereOrStarInput;
                fromJSON(object: any): PermissionFindWhereOrStarInput;
                toJSON(message: PermissionFindWhereOrStarInput): unknown;
                create(base?: DeepPartial<PermissionFindWhereOrStarInput>): PermissionFindWhereOrStarInput;
                fromPartial(object: DeepPartial<PermissionFindWhereOrStarInput>): PermissionFindWhereOrStarInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Permission, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Permission;
                fromJSON(object: any): Permission;
                toJSON(message: Permission): unknown;
                create(base?: DeepPartial<Permission>): Permission;
                fromPartial(object: DeepPartial<Permission>): Permission;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findByPermitted: {
            readonly name: "FindByPermitted";
            readonly requestType: {
                encode(message: PermissionFindByPermittedInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedInput;
                fromJSON(object: any): PermissionFindByPermittedInput;
                toJSON(message: PermissionFindByPermittedInput): unknown;
                create(base?: DeepPartial<PermissionFindByPermittedInput>): PermissionFindByPermittedInput;
                fromPartial(object: DeepPartial<PermissionFindByPermittedInput>): PermissionFindByPermittedInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PermissionFindByPermittedResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResult;
                fromJSON(object: any): PermissionFindByPermittedResult;
                toJSON(message: PermissionFindByPermittedResult): unknown;
                create(base?: DeepPartial<PermissionFindByPermittedResult>): PermissionFindByPermittedResult;
                fromPartial(object: DeepPartial<PermissionFindByPermittedResult>): PermissionFindByPermittedResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findByEntity: {
            readonly name: "FindByEntity";
            readonly requestType: {
                encode(message: PermissionFindByEntityInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityInput;
                fromJSON(object: any): PermissionFindByEntityInput;
                toJSON(message: PermissionFindByEntityInput): unknown;
                create(base?: DeepPartial<PermissionFindByEntityInput>): PermissionFindByEntityInput;
                fromPartial(object: DeepPartial<PermissionFindByEntityInput>): PermissionFindByEntityInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PermissionFindByEntityResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResult;
                fromJSON(object: any): PermissionFindByEntityResult;
                toJSON(message: PermissionFindByEntityResult): unknown;
                create(base?: DeepPartial<PermissionFindByEntityResult>): PermissionFindByEntityResult;
                fromPartial(object: DeepPartial<PermissionFindByEntityResult>): PermissionFindByEntityResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findAllActions: {
            readonly name: "FindAllActions";
            readonly requestType: {
                encode(message: PermissionFindAllActionsInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsInput;
                fromJSON(object: any): PermissionFindAllActionsInput;
                toJSON(message: PermissionFindAllActionsInput): unknown;
                create(base?: DeepPartial<PermissionFindAllActionsInput>): PermissionFindAllActionsInput;
                fromPartial(object: DeepPartial<PermissionFindAllActionsInput>): PermissionFindAllActionsInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PermissionFindAllActionsResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResult;
                fromJSON(object: any): PermissionFindAllActionsResult;
                toJSON(message: PermissionFindAllActionsResult): unknown;
                create(base?: DeepPartial<PermissionFindAllActionsResult>): PermissionFindAllActionsResult;
                fromPartial(object: DeepPartial<PermissionFindAllActionsResult>): PermissionFindAllActionsResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly validateOne: {
            readonly name: "ValidateOne";
            readonly requestType: {
                encode(message: PermissionValidateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneInput;
                fromJSON(object: any): PermissionValidateOneInput;
                toJSON(message: PermissionValidateOneInput): unknown;
                create(base?: DeepPartial<PermissionValidateOneInput>): PermissionValidateOneInput;
                fromPartial(object: DeepPartial<PermissionValidateOneInput>): PermissionValidateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PermissionValidateOneResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneResult;
                fromJSON(object: any): PermissionValidateOneResult;
                toJSON(message: PermissionValidateOneResult): unknown;
                create(base?: DeepPartial<PermissionValidateOneResult>): PermissionValidateOneResult;
                fromPartial(object: DeepPartial<PermissionValidateOneResult>): PermissionValidateOneResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: PermissionRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveOneInput;
                fromJSON(object: any): PermissionRemoveOneInput;
                toJSON(message: PermissionRemoveOneInput): unknown;
                create(base?: DeepPartial<PermissionRemoveOneInput>): PermissionRemoveOneInput;
                fromPartial(object: DeepPartial<PermissionRemoveOneInput>): PermissionRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeWhere: {
            readonly name: "RemoveWhere";
            readonly requestType: {
                encode(message: PermissionRemoveWhereInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereInput;
                fromJSON(object: any): PermissionRemoveWhereInput;
                toJSON(message: PermissionRemoveWhereInput): unknown;
                create(base?: DeepPartial<PermissionRemoveWhereInput>): PermissionRemoveWhereInput;
                fromPartial(object: DeepPartial<PermissionRemoveWhereInput>): PermissionRemoveWhereInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeWhereMany: {
            readonly name: "RemoveWhereMany";
            readonly requestType: {
                encode(message: PermissionRemoveWhereManyInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereManyInput;
                fromJSON(object: any): PermissionRemoveWhereManyInput;
                toJSON(message: PermissionRemoveWhereManyInput): unknown;
                create(base?: DeepPartial<PermissionRemoveWhereManyInput>): PermissionRemoveWhereManyInput;
                fromPartial(object: DeepPartial<PermissionRemoveWhereManyInput>): PermissionRemoveWhereManyInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeAllActions: {
            readonly name: "RemoveAllActions";
            readonly requestType: {
                encode(message: PermissionRemoveAllActionsInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsInput;
                fromJSON(object: any): PermissionRemoveAllActionsInput;
                toJSON(message: PermissionRemoveAllActionsInput): unknown;
                create(base?: DeepPartial<PermissionRemoveAllActionsInput>): PermissionRemoveAllActionsInput;
                fromPartial(object: DeepPartial<PermissionRemoveAllActionsInput>): PermissionRemoveAllActionsInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface PermissionServiceImplementation<CallContextExt = {}> {
    createOne(request: PermissionCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
    createMany(request: PermissionCreateManyInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permissions>>;
    findOne(request: PermissionFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
    findWhere(request: PermissionFindWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
    findWhereMany(request: PermissionFindWhereManyInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permissions>>;
    findWhereOrStar(request: PermissionFindWhereOrStarInput, context: CallContext & CallContextExt): Promise<DeepPartial<Permission>>;
    findByPermitted(request: PermissionFindByPermittedInput, context: CallContext & CallContextExt): Promise<DeepPartial<PermissionFindByPermittedResult>>;
    findByEntity(request: PermissionFindByEntityInput, context: CallContext & CallContextExt): Promise<DeepPartial<PermissionFindByEntityResult>>;
    findAllActions(request: PermissionFindAllActionsInput, context: CallContext & CallContextExt): Promise<DeepPartial<PermissionFindAllActionsResult>>;
    validateOne(request: PermissionValidateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<PermissionValidateOneResult>>;
    removeOne(request: PermissionRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    removeWhere(request: PermissionRemoveWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    removeWhereMany(request: PermissionRemoveWhereManyInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    removeAllActions(request: PermissionRemoveAllActionsInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}
export interface PermissionServiceClient<CallOptionsExt = {}> {
    createOne(request: DeepPartial<PermissionCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Permission>;
    createMany(request: DeepPartial<PermissionCreateManyInput>, options?: CallOptions & CallOptionsExt): Promise<Permissions>;
    findOne(request: DeepPartial<PermissionFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Permission>;
    findWhere(request: DeepPartial<PermissionFindWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Permission>;
    findWhereMany(request: DeepPartial<PermissionFindWhereManyInput>, options?: CallOptions & CallOptionsExt): Promise<Permissions>;
    findWhereOrStar(request: DeepPartial<PermissionFindWhereOrStarInput>, options?: CallOptions & CallOptionsExt): Promise<Permission>;
    findByPermitted(request: DeepPartial<PermissionFindByPermittedInput>, options?: CallOptions & CallOptionsExt): Promise<PermissionFindByPermittedResult>;
    findByEntity(request: DeepPartial<PermissionFindByEntityInput>, options?: CallOptions & CallOptionsExt): Promise<PermissionFindByEntityResult>;
    findAllActions(request: DeepPartial<PermissionFindAllActionsInput>, options?: CallOptions & CallOptionsExt): Promise<PermissionFindAllActionsResult>;
    validateOne(request: DeepPartial<PermissionValidateOneInput>, options?: CallOptions & CallOptionsExt): Promise<PermissionValidateOneResult>;
    removeOne(request: DeepPartial<PermissionRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    removeWhere(request: DeepPartial<PermissionRemoveWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    removeWhereMany(request: DeepPartial<PermissionRemoveWhereManyInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    removeAllActions(request: DeepPartial<PermissionRemoveAllActionsInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}
export type UserFollowServiceDefinition = typeof UserFollowServiceDefinition;
export declare const UserFollowServiceDefinition: {
    readonly name: "UserFollowService";
    readonly fullName: "main.UserFollowService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: UserFollowCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowCreateOneInput;
                fromJSON(object: any): UserFollowCreateOneInput;
                toJSON(message: UserFollowCreateOneInput): unknown;
                create(base?: DeepPartial<UserFollowCreateOneInput>): UserFollowCreateOneInput;
                fromPartial(object: DeepPartial<UserFollowCreateOneInput>): UserFollowCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Follower, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Follower;
                fromJSON(object: any): Follower;
                toJSON(message: Follower): unknown;
                create(base?: DeepPartial<Follower>): Follower;
                fromPartial(object: DeepPartial<Follower>): Follower;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: UserFollowRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowRemoveOneInput;
                fromJSON(object: any): UserFollowRemoveOneInput;
                toJSON(message: UserFollowRemoveOneInput): unknown;
                create(base?: DeepPartial<UserFollowRemoveOneInput>): UserFollowRemoveOneInput;
                fromPartial(object: DeepPartial<UserFollowRemoveOneInput>): UserFollowRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Follower, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Follower;
                fromJSON(object: any): Follower;
                toJSON(message: Follower): unknown;
                create(base?: DeepPartial<Follower>): Follower;
                fromPartial(object: DeepPartial<Follower>): Follower;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findFollowers: {
            readonly name: "FindFollowers";
            readonly requestType: {
                encode(message: UserFindFollowersInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersInput;
                fromJSON(object: any): UserFindFollowersInput;
                toJSON(message: UserFindFollowersInput): unknown;
                create(base?: DeepPartial<UserFindFollowersInput>): UserFindFollowersInput;
                fromPartial(object: DeepPartial<UserFindFollowersInput>): UserFindFollowersInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UserFindFollowersResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResult;
                fromJSON(object: any): UserFindFollowersResult;
                toJSON(message: UserFindFollowersResult): unknown;
                create(base?: DeepPartial<UserFindFollowersResult>): UserFindFollowersResult;
                fromPartial(object: DeepPartial<UserFindFollowersResult>): UserFindFollowersResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findFollowees: {
            readonly name: "FindFollowees";
            readonly requestType: {
                encode(message: UserFindFolloweesInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesInput;
                fromJSON(object: any): UserFindFolloweesInput;
                toJSON(message: UserFindFolloweesInput): unknown;
                create(base?: DeepPartial<UserFindFolloweesInput>): UserFindFolloweesInput;
                fromPartial(object: DeepPartial<UserFindFolloweesInput>): UserFindFolloweesInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: UserFindFolloweesResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResult;
                fromJSON(object: any): UserFindFolloweesResult;
                toJSON(message: UserFindFolloweesResult): unknown;
                create(base?: DeepPartial<UserFindFolloweesResult>): UserFindFolloweesResult;
                fromPartial(object: DeepPartial<UserFindFolloweesResult>): UserFindFolloweesResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface UserFollowServiceImplementation<CallContextExt = {}> {
    createOne(request: UserFollowCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
    removeOne(request: UserFollowRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Follower>>;
    findFollowers(request: UserFindFollowersInput, context: CallContext & CallContextExt): Promise<DeepPartial<UserFindFollowersResult>>;
    findFollowees(request: UserFindFolloweesInput, context: CallContext & CallContextExt): Promise<DeepPartial<UserFindFolloweesResult>>;
}
export interface UserFollowServiceClient<CallOptionsExt = {}> {
    createOne(request: DeepPartial<UserFollowCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
    removeOne(request: DeepPartial<UserFollowRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Follower>;
    findFollowers(request: DeepPartial<UserFindFollowersInput>, options?: CallOptions & CallOptionsExt): Promise<UserFindFollowersResult>;
    findFollowees(request: DeepPartial<UserFindFolloweesInput>, options?: CallOptions & CallOptionsExt): Promise<UserFindFolloweesResult>;
}
export type ConversationServiceDefinition = typeof ConversationServiceDefinition;
export declare const ConversationServiceDefinition: {
    readonly name: "ConversationService";
    readonly fullName: "main.ConversationService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: ConversationCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationCreateOneInput;
                fromJSON(object: any): ConversationCreateOneInput;
                toJSON(message: ConversationCreateOneInput): unknown;
                create(base?: DeepPartial<ConversationCreateOneInput>): ConversationCreateOneInput;
                fromPartial(object: DeepPartial<ConversationCreateOneInput>): ConversationCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Conversation, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Conversation;
                fromJSON(object: any): Conversation;
                toJSON(message: Conversation): unknown;
                create(base?: DeepPartial<Conversation>): Conversation;
                fromPartial(object: DeepPartial<Conversation>): Conversation;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateOne: {
            readonly name: "UpdateOne";
            readonly requestType: {
                encode(message: ConversationUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationUpdateOneInput;
                fromJSON(object: any): ConversationUpdateOneInput;
                toJSON(message: ConversationUpdateOneInput): unknown;
                create(base?: DeepPartial<ConversationUpdateOneInput>): ConversationUpdateOneInput;
                fromPartial(object: DeepPartial<ConversationUpdateOneInput>): ConversationUpdateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Conversation, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Conversation;
                fromJSON(object: any): Conversation;
                toJSON(message: Conversation): unknown;
                create(base?: DeepPartial<Conversation>): Conversation;
                fromPartial(object: DeepPartial<Conversation>): Conversation;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findOne: {
            readonly name: "FindOne";
            readonly requestType: {
                encode(message: ConversationFindOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindOneInput;
                fromJSON(object: any): ConversationFindOneInput;
                toJSON(message: ConversationFindOneInput): unknown;
                create(base?: DeepPartial<ConversationFindOneInput>): ConversationFindOneInput;
                fromPartial(object: DeepPartial<ConversationFindOneInput>): ConversationFindOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Conversation, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Conversation;
                fromJSON(object: any): Conversation;
                toJSON(message: Conversation): unknown;
                create(base?: DeepPartial<Conversation>): Conversation;
                fromPartial(object: DeepPartial<Conversation>): Conversation;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: ConversationRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationRemoveOneInput;
                fromJSON(object: any): ConversationRemoveOneInput;
                toJSON(message: ConversationRemoveOneInput): unknown;
                create(base?: DeepPartial<ConversationRemoveOneInput>): ConversationRemoveOneInput;
                fromPartial(object: DeepPartial<ConversationRemoveOneInput>): ConversationRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Conversation, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Conversation;
                fromJSON(object: any): Conversation;
                toJSON(message: Conversation): unknown;
                create(base?: DeepPartial<Conversation>): Conversation;
                fromPartial(object: DeepPartial<Conversation>): Conversation;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findByParticipant: {
            readonly name: "FindByParticipant";
            readonly requestType: {
                encode(message: ConversationFindByParticipantInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantInput;
                fromJSON(object: any): ConversationFindByParticipantInput;
                toJSON(message: ConversationFindByParticipantInput): unknown;
                create(base?: DeepPartial<ConversationFindByParticipantInput>): ConversationFindByParticipantInput;
                fromPartial(object: DeepPartial<ConversationFindByParticipantInput>): ConversationFindByParticipantInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ConversationFindByParticipantResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResult;
                fromJSON(object: any): ConversationFindByParticipantResult;
                toJSON(message: ConversationFindByParticipantResult): unknown;
                create(base?: DeepPartial<ConversationFindByParticipantResult>): ConversationFindByParticipantResult;
                fromPartial(object: DeepPartial<ConversationFindByParticipantResult>): ConversationFindByParticipantResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface ConversationServiceImplementation<CallContextExt = {}> {
    createOne(request: ConversationCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Conversation>>;
    updateOne(request: ConversationUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Conversation>>;
    findOne(request: ConversationFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Conversation>>;
    removeOne(request: ConversationRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Conversation>>;
    findByParticipant(request: ConversationFindByParticipantInput, context: CallContext & CallContextExt): Promise<DeepPartial<ConversationFindByParticipantResult>>;
}
export interface ConversationServiceClient<CallOptionsExt = {}> {
    createOne(request: DeepPartial<ConversationCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Conversation>;
    updateOne(request: DeepPartial<ConversationUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Conversation>;
    findOne(request: DeepPartial<ConversationFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Conversation>;
    removeOne(request: DeepPartial<ConversationRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Conversation>;
    findByParticipant(request: DeepPartial<ConversationFindByParticipantInput>, options?: CallOptions & CallOptionsExt): Promise<ConversationFindByParticipantResult>;
}
export type ConversationParticipantServiceDefinition = typeof ConversationParticipantServiceDefinition;
export declare const ConversationParticipantServiceDefinition: {
    readonly name: "ConversationParticipantService";
    readonly fullName: "main.ConversationParticipantService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: ConversationParticipantCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantCreateOneInput;
                fromJSON(object: any): ConversationParticipantCreateOneInput;
                toJSON(message: ConversationParticipantCreateOneInput): unknown;
                create(base?: DeepPartial<ConversationParticipantCreateOneInput>): ConversationParticipantCreateOneInput;
                fromPartial(object: DeepPartial<ConversationParticipantCreateOneInput>): ConversationParticipantCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ConversationParticipant, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipant;
                fromJSON(object: any): ConversationParticipant;
                toJSON(message: ConversationParticipant): unknown;
                create(base?: DeepPartial<ConversationParticipant>): ConversationParticipant;
                fromPartial(object: DeepPartial<ConversationParticipant>): ConversationParticipant;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findOne: {
            readonly name: "FindOne";
            readonly requestType: {
                encode(message: ConversationParticipantFindOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindOneInput;
                fromJSON(object: any): ConversationParticipantFindOneInput;
                toJSON(message: ConversationParticipantFindOneInput): unknown;
                create(base?: DeepPartial<ConversationParticipantFindOneInput>): ConversationParticipantFindOneInput;
                fromPartial(object: DeepPartial<ConversationParticipantFindOneInput>): ConversationParticipantFindOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ConversationParticipant, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipant;
                fromJSON(object: any): ConversationParticipant;
                toJSON(message: ConversationParticipant): unknown;
                create(base?: DeepPartial<ConversationParticipant>): ConversationParticipant;
                fromPartial(object: DeepPartial<ConversationParticipant>): ConversationParticipant;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: ConversationParticipantRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantRemoveOneInput;
                fromJSON(object: any): ConversationParticipantRemoveOneInput;
                toJSON(message: ConversationParticipantRemoveOneInput): unknown;
                create(base?: DeepPartial<ConversationParticipantRemoveOneInput>): ConversationParticipantRemoveOneInput;
                fromPartial(object: DeepPartial<ConversationParticipantRemoveOneInput>): ConversationParticipantRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ConversationParticipant, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipant;
                fromJSON(object: any): ConversationParticipant;
                toJSON(message: ConversationParticipant): unknown;
                create(base?: DeepPartial<ConversationParticipant>): ConversationParticipant;
                fromPartial(object: DeepPartial<ConversationParticipant>): ConversationParticipant;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findByConversation: {
            readonly name: "FindByConversation";
            readonly requestType: {
                encode(message: ConversationParticipantFindByConversationInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationInput;
                fromJSON(object: any): ConversationParticipantFindByConversationInput;
                toJSON(message: ConversationParticipantFindByConversationInput): unknown;
                create(base?: DeepPartial<ConversationParticipantFindByConversationInput>): ConversationParticipantFindByConversationInput;
                fromPartial(object: DeepPartial<ConversationParticipantFindByConversationInput>): ConversationParticipantFindByConversationInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ConversationParticipantFindByConversationResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationResult;
                fromJSON(object: any): ConversationParticipantFindByConversationResult;
                toJSON(message: ConversationParticipantFindByConversationResult): unknown;
                create(base?: DeepPartial<ConversationParticipantFindByConversationResult>): ConversationParticipantFindByConversationResult;
                fromPartial(object: DeepPartial<ConversationParticipantFindByConversationResult>): ConversationParticipantFindByConversationResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface ConversationParticipantServiceImplementation<CallContextExt = {}> {
    createOne(request: ConversationParticipantCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<ConversationParticipant>>;
    findOne(request: ConversationParticipantFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<ConversationParticipant>>;
    removeOne(request: ConversationParticipantRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<ConversationParticipant>>;
    findByConversation(request: ConversationParticipantFindByConversationInput, context: CallContext & CallContextExt): Promise<DeepPartial<ConversationParticipantFindByConversationResult>>;
}
export interface ConversationParticipantServiceClient<CallOptionsExt = {}> {
    createOne(request: DeepPartial<ConversationParticipantCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<ConversationParticipant>;
    findOne(request: DeepPartial<ConversationParticipantFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<ConversationParticipant>;
    removeOne(request: DeepPartial<ConversationParticipantRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<ConversationParticipant>;
    findByConversation(request: DeepPartial<ConversationParticipantFindByConversationInput>, options?: CallOptions & CallOptionsExt): Promise<ConversationParticipantFindByConversationResult>;
}
export type MessageServiceDefinition = typeof MessageServiceDefinition;
export declare const MessageServiceDefinition: {
    readonly name: "MessageService";
    readonly fullName: "main.MessageService";
    readonly methods: {
        readonly createOne: {
            readonly name: "CreateOne";
            readonly requestType: {
                encode(message: MessageCreateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MessageCreateOneInput;
                fromJSON(object: any): MessageCreateOneInput;
                toJSON(message: MessageCreateOneInput): unknown;
                create(base?: DeepPartial<MessageCreateOneInput>): MessageCreateOneInput;
                fromPartial(object: DeepPartial<MessageCreateOneInput>): MessageCreateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Message, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Message;
                fromJSON(object: any): Message;
                toJSON(message: Message): unknown;
                create(base?: DeepPartial<Message>): Message;
                fromPartial(object: DeepPartial<Message>): Message;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateOne: {
            readonly name: "UpdateOne";
            readonly requestType: {
                encode(message: MessageUpdateOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MessageUpdateOneInput;
                fromJSON(object: any): MessageUpdateOneInput;
                toJSON(message: MessageUpdateOneInput): unknown;
                create(base?: DeepPartial<MessageUpdateOneInput>): MessageUpdateOneInput;
                fromPartial(object: DeepPartial<MessageUpdateOneInput>): MessageUpdateOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Message, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Message;
                fromJSON(object: any): Message;
                toJSON(message: Message): unknown;
                create(base?: DeepPartial<Message>): Message;
                fromPartial(object: DeepPartial<Message>): Message;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findOne: {
            readonly name: "FindOne";
            readonly requestType: {
                encode(message: MessageFindOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindOneInput;
                fromJSON(object: any): MessageFindOneInput;
                toJSON(message: MessageFindOneInput): unknown;
                create(base?: DeepPartial<MessageFindOneInput>): MessageFindOneInput;
                fromPartial(object: DeepPartial<MessageFindOneInput>): MessageFindOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Message, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Message;
                fromJSON(object: any): Message;
                toJSON(message: Message): unknown;
                create(base?: DeepPartial<Message>): Message;
                fromPartial(object: DeepPartial<Message>): Message;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findUnique: {
            readonly name: "FindUnique";
            readonly requestType: {
                encode(message: MessageFindUniqueInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindUniqueInput;
                fromJSON(object: any): MessageFindUniqueInput;
                toJSON(message: MessageFindUniqueInput): unknown;
                create(base?: DeepPartial<MessageFindUniqueInput>): MessageFindUniqueInput;
                fromPartial(object: DeepPartial<MessageFindUniqueInput>): MessageFindUniqueInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Message, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Message;
                fromJSON(object: any): Message;
                toJSON(message: Message): unknown;
                create(base?: DeepPartial<Message>): Message;
                fromPartial(object: DeepPartial<Message>): Message;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly removeOne: {
            readonly name: "RemoveOne";
            readonly requestType: {
                encode(message: MessageRemoveOneInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MessageRemoveOneInput;
                fromJSON(object: any): MessageRemoveOneInput;
                toJSON(message: MessageRemoveOneInput): unknown;
                create(base?: DeepPartial<MessageRemoveOneInput>): MessageRemoveOneInput;
                fromPartial(object: DeepPartial<MessageRemoveOneInput>): MessageRemoveOneInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Message, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Message;
                fromJSON(object: any): Message;
                toJSON(message: Message): unknown;
                create(base?: DeepPartial<Message>): Message;
                fromPartial(object: DeepPartial<Message>): Message;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly findByConversation: {
            readonly name: "FindByConversation";
            readonly requestType: {
                encode(message: MessageFindByConversationInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationInput;
                fromJSON(object: any): MessageFindByConversationInput;
                toJSON(message: MessageFindByConversationInput): unknown;
                create(base?: DeepPartial<MessageFindByConversationInput>): MessageFindByConversationInput;
                fromPartial(object: DeepPartial<MessageFindByConversationInput>): MessageFindByConversationInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: MessageFindByConversationResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResult;
                fromJSON(object: any): MessageFindByConversationResult;
                toJSON(message: MessageFindByConversationResult): unknown;
                create(base?: DeepPartial<MessageFindByConversationResult>): MessageFindByConversationResult;
                fromPartial(object: DeepPartial<MessageFindByConversationResult>): MessageFindByConversationResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface MessageServiceImplementation<CallContextExt = {}> {
    createOne(request: MessageCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
    updateOne(request: MessageUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
    findOne(request: MessageFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
    findUnique(request: MessageFindUniqueInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
    removeOne(request: MessageRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Message>>;
    findByConversation(request: MessageFindByConversationInput, context: CallContext & CallContextExt): Promise<DeepPartial<MessageFindByConversationResult>>;
}
export interface MessageServiceClient<CallOptionsExt = {}> {
    createOne(request: DeepPartial<MessageCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
    updateOne(request: DeepPartial<MessageUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
    findOne(request: DeepPartial<MessageFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
    findUnique(request: DeepPartial<MessageFindUniqueInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
    removeOne(request: DeepPartial<MessageRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Message>;
    findByConversation(request: DeepPartial<MessageFindByConversationInput>, options?: CallOptions & CallOptionsExt): Promise<MessageFindByConversationResult>;
}
export type WorkersServiceDefinition = typeof WorkersServiceDefinition;
export declare const WorkersServiceDefinition: {
    readonly name: "WorkersService";
    readonly fullName: "main.WorkersService";
    readonly methods: {
        readonly publishJob: {
            readonly name: "PublishJob";
            readonly requestType: {
                encode(message: PublishJobInput, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobInput;
                fromJSON(object: any): PublishJobInput;
                toJSON(message: PublishJobInput): unknown;
                create(base?: DeepPartial<PublishJobInput>): PublishJobInput;
                fromPartial(object: DeepPartial<PublishJobInput>): PublishJobInput;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublishJobResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobResult;
                fromJSON(object: any): PublishJobResult;
                toJSON(message: PublishJobResult): unknown;
                create(base?: DeepPartial<PublishJobResult>): PublishJobResult;
                fromPartial(object: DeepPartial<PublishJobResult>): PublishJobResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly healthCheck: {
            readonly name: "HealthCheck";
            readonly requestType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {}): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: WorkersHealthCheckResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): WorkersHealthCheckResult;
                fromJSON(object: any): WorkersHealthCheckResult;
                toJSON(message: WorkersHealthCheckResult): unknown;
                create(base?: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult;
                fromPartial(object: DeepPartial<WorkersHealthCheckResult>): WorkersHealthCheckResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface WorkersServiceImplementation<CallContextExt = {}> {
    publishJob(request: PublishJobInput, context: CallContext & CallContextExt): Promise<DeepPartial<PublishJobResult>>;
    healthCheck(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<WorkersHealthCheckResult>>;
}
export interface WorkersServiceClient<CallOptionsExt = {}> {
    publishJob(request: DeepPartial<PublishJobInput>, options?: CallOptions & CallOptionsExt): Promise<PublishJobResult>;
    healthCheck(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<WorkersHealthCheckResult>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
