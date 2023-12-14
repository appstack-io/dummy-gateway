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

import { postToUnary } from './utils';

export class ConversationParticipantService {
  private readonly serviceName: string = "ConversationParticipantService";
  private opts = { host: 'aaa', port: '0' }
  
  
    async createOne(data: Partial<ConversationParticipantCreateOneInput>): Promise<ConversationParticipant> {
      return postToUnary<ConversationParticipant>(this.serviceName, 'createOne', data, this.opts);
    }
  
    async findOne(data: Partial<ConversationParticipantFindOneInput>): Promise<ConversationParticipant> {
      return postToUnary<ConversationParticipant>(this.serviceName, 'findOne', data, this.opts);
    }
  
    async removeOne(data: Partial<ConversationParticipantRemoveOneInput>): Promise<ConversationParticipant> {
      return postToUnary<ConversationParticipant>(this.serviceName, 'removeOne', data, this.opts);
    }
  
    async findByConversation(data: Partial<ConversationParticipantFindByConversationInput>): Promise<ConversationParticipantFindByConversationResult> {
      return postToUnary<ConversationParticipantFindByConversationResult>(this.serviceName, 'findByConversation', data, this.opts);
    }
  
}
