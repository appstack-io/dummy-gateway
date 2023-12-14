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

import { postToUnary } from './utils';

export class ConversationService {
  private readonly serviceName: string = "ConversationService";
  private opts = { host: 'aaa', port: '0' }
  
  
    async createOne(data: Partial<ConversationCreateOneInput>): Promise<Conversation> {
      return postToUnary<Conversation>(this.serviceName, 'createOne', data, this.opts);
    }
  
    async updateOne(data: Partial<ConversationUpdateOneInput>): Promise<Conversation> {
      return postToUnary<Conversation>(this.serviceName, 'updateOne', data, this.opts);
    }
  
    async findOne(data: Partial<ConversationFindOneInput>): Promise<Conversation> {
      return postToUnary<Conversation>(this.serviceName, 'findOne', data, this.opts);
    }
  
    async removeOne(data: Partial<ConversationRemoveOneInput>): Promise<Conversation> {
      return postToUnary<Conversation>(this.serviceName, 'removeOne', data, this.opts);
    }
  
    async findByParticipant(data: Partial<ConversationFindByParticipantInput>): Promise<ConversationFindByParticipantResult> {
      return postToUnary<ConversationFindByParticipantResult>(this.serviceName, 'findByParticipant', data, this.opts);
    }
  
}
