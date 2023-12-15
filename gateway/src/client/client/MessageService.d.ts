export interface MessageCreateOneInput {
    conversationId: string;
    media: MessageMedia | undefined;
    senderId: string;
    uniqueness: string;
}
export interface MessageMedia {
    text: string;
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
export interface MessageFindByConversationInput {
    filter: MessageFindByConversationFilter | undefined;
    opts: MessageFindByConversationOpts | undefined;
}
export interface MessageFindByConversationFilter {
    conversationId: string;
}
export interface MessageFindByConversationOpts {
    limit: number;
    offset: number;
}
export interface MessageFindByConversationResult {
    meta: MessageFindByConversationResultMeta | undefined;
    results: Message[];
}
export interface MessageFindByConversationResultMeta {
    offset: number;
}
import { Metadata } from 'nice-grpc';
export declare class MessageService {
    private readonly serviceName;
    createOne(data: Partial<MessageCreateOneInput>, metadata?: Metadata): Promise<Message>;
    createOnePublic(data: Partial<MessageCreateOneInput>, metadata?: Metadata): Promise<Message>;
    updateOne(data: Partial<MessageUpdateOneInput>, metadata?: Metadata): Promise<Message>;
    updateOnePublic(data: Partial<MessageUpdateOneInput>, metadata?: Metadata): Promise<Message>;
    findOne(data: Partial<MessageFindOneInput>, metadata?: Metadata): Promise<Message>;
    findOnePublic(data: Partial<MessageFindOneInput>, metadata?: Metadata): Promise<Message>;
    findUnique(data: Partial<MessageFindUniqueInput>, metadata?: Metadata): Promise<Message>;
    findUniquePublic(data: Partial<MessageFindUniqueInput>, metadata?: Metadata): Promise<Message>;
    removeOne(data: Partial<MessageRemoveOneInput>, metadata?: Metadata): Promise<Message>;
    removeOnePublic(data: Partial<MessageRemoveOneInput>, metadata?: Metadata): Promise<Message>;
    findByConversation(data: Partial<MessageFindByConversationInput>, metadata?: Metadata): Promise<MessageFindByConversationResult>;
    findByConversationPublic(data: Partial<MessageFindByConversationInput>, metadata?: Metadata): Promise<MessageFindByConversationResult>;
}
