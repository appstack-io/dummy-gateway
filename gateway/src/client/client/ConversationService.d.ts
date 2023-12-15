export interface ConversationCreateOneInput {
    name: string;
    description: string;
}
export interface Conversation {
    id: string;
    createdAt: number;
    updatedAt: number;
    name: string;
    description: string;
    lastMessageAt: number;
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
export interface ConversationFindByParticipantInput {
    filter: ConversationFindByParticipantFilter | undefined;
    opts: ConversationFindByParticipantOpts | undefined;
}
export interface ConversationFindByParticipantFilter {
    participantId: string;
    fromLastMessageAt: number;
}
export interface ConversationFindByParticipantOpts {
    limit: number;
    offset: number;
}
export interface ConversationFindByParticipantResult {
    meta: ConversationFindByParticipantResultMeta | undefined;
    results: Conversation[];
}
export interface ConversationFindByParticipantResultMeta {
    offset: number;
}
import { Metadata } from 'nice-grpc';
export declare class ConversationService {
    private readonly serviceName;
    createOne(data: Partial<ConversationCreateOneInput>, metadata?: Metadata): Promise<Conversation>;
    createOnePublic(data: Partial<ConversationCreateOneInput>, metadata?: Metadata): Promise<Conversation>;
    updateOne(data: Partial<ConversationUpdateOneInput>, metadata?: Metadata): Promise<Conversation>;
    updateOnePublic(data: Partial<ConversationUpdateOneInput>, metadata?: Metadata): Promise<Conversation>;
    findOne(data: Partial<ConversationFindOneInput>, metadata?: Metadata): Promise<Conversation>;
    findOnePublic(data: Partial<ConversationFindOneInput>, metadata?: Metadata): Promise<Conversation>;
    removeOne(data: Partial<ConversationRemoveOneInput>, metadata?: Metadata): Promise<Conversation>;
    removeOnePublic(data: Partial<ConversationRemoveOneInput>, metadata?: Metadata): Promise<Conversation>;
    findByParticipant(data: Partial<ConversationFindByParticipantInput>, metadata?: Metadata): Promise<ConversationFindByParticipantResult>;
    findByParticipantPublic(data: Partial<ConversationFindByParticipantInput>, metadata?: Metadata): Promise<ConversationFindByParticipantResult>;
}
