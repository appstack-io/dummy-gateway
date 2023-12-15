export interface ConversationParticipantCreateOneInput {
    conversationId: string;
    participantId: string;
}
export interface ConversationParticipant {
    id: string;
    createdAt: number;
    updatedAt: number;
    conversationId: string;
    participantId: string;
    writeableAs: AuthorizableAs | undefined;
}
export interface AuthorizableAs {
    entity: string;
    entityId: string;
}
export interface ConversationParticipantFindOneInput {
    id: string;
}
export interface ConversationParticipantRemoveOneInput {
    id: string;
}
export interface ConversationParticipantFindByConversationInput {
    filter: ConversationParticipantFindByConversationFilter | undefined;
    opts: ConversationParticipantFindByConversationOpts | undefined;
}
export interface ConversationParticipantFindByConversationFilter {
    conversationId: string;
}
export interface ConversationParticipantFindByConversationOpts {
    limit: number;
    offset: number;
}
export interface ConversationParticipantFindByConversationResult {
    meta: ConversationParticipantFindByConversationResultMeta | undefined;
    results: ConversationParticipant[];
}
export interface ConversationParticipantFindByConversationResultMeta {
    offset: number;
}
import { Metadata } from 'nice-grpc';
export declare class ConversationParticipantService {
    private readonly serviceName;
    createOne(data: Partial<ConversationParticipantCreateOneInput>, metadata?: Metadata): Promise<ConversationParticipant>;
    createOnePublic(data: Partial<ConversationParticipantCreateOneInput>, metadata?: Metadata): Promise<ConversationParticipant>;
    findOne(data: Partial<ConversationParticipantFindOneInput>, metadata?: Metadata): Promise<ConversationParticipant>;
    findOnePublic(data: Partial<ConversationParticipantFindOneInput>, metadata?: Metadata): Promise<ConversationParticipant>;
    removeOne(data: Partial<ConversationParticipantRemoveOneInput>, metadata?: Metadata): Promise<ConversationParticipant>;
    removeOnePublic(data: Partial<ConversationParticipantRemoveOneInput>, metadata?: Metadata): Promise<ConversationParticipant>;
    findByConversation(data: Partial<ConversationParticipantFindByConversationInput>, metadata?: Metadata): Promise<ConversationParticipantFindByConversationResult>;
    findByConversationPublic(data: Partial<ConversationParticipantFindByConversationInput>, metadata?: Metadata): Promise<ConversationParticipantFindByConversationResult>;
}
