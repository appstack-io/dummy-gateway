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

import { postToUnary } from './utils';

export class MessageService {
  private readonly serviceName: string = "MessageService";
  private opts = { host: 'http://localhost', port: '5000' }
  
  
    async createOne(data: Partial<MessageCreateOneInput>): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'createOne', data, this.opts);
    }
  
    async updateOne(data: Partial<MessageUpdateOneInput>): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'updateOne', data, this.opts);
    }
  
    async findOne(data: Partial<MessageFindOneInput>): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'findOne', data, this.opts);
    }
  
    async findUnique(data: Partial<MessageFindUniqueInput>): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'findUnique', data, this.opts);
    }
  
    async removeOne(data: Partial<MessageRemoveOneInput>): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'removeOne', data, this.opts);
    }
  
    async findByConversation(data: Partial<MessageFindByConversationInput>): Promise<MessageFindByConversationResult> {
      return postToUnary<MessageFindByConversationResult>(this.serviceName, 'findByConversation', data, this.opts);
    }
  
}
