
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
  import { postToUnary, postToUnaryPublic } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class MessageService {
    private readonly serviceName: string = "MessageService";
    
    
    async createOne(data: Partial<MessageCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'createOne', data, metadata);
    }
    
    async createOnePublic(data: Partial<MessageCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnaryPublic<Message>(this.serviceName, 'createOne', data, metadata);
    }
  
    async updateOne(data: Partial<MessageUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'updateOne', data, metadata);
    }
    
    async updateOnePublic(data: Partial<MessageUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnaryPublic<Message>(this.serviceName, 'updateOne', data, metadata);
    }
  
    async findOne(data: Partial<MessageFindOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'findOne', data, metadata);
    }
    
    async findOnePublic(data: Partial<MessageFindOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnaryPublic<Message>(this.serviceName, 'findOne', data, metadata);
    }
  
    async findUnique(data: Partial<MessageFindUniqueInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'findUnique', data, metadata);
    }
    
    async findUniquePublic(data: Partial<MessageFindUniqueInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnaryPublic<Message>(this.serviceName, 'findUnique', data, metadata);
    }
  
    async removeOne(data: Partial<MessageRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnary<Message>(this.serviceName, 'removeOne', data, metadata);
    }
    
    async removeOnePublic(data: Partial<MessageRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Message> {
      return postToUnaryPublic<Message>(this.serviceName, 'removeOne', data, metadata);
    }
  
    async findByConversation(data: Partial<MessageFindByConversationInput>, metadata: Metadata=new Metadata()): Promise<MessageFindByConversationResult> {
      return postToUnary<MessageFindByConversationResult>(this.serviceName, 'findByConversation', data, metadata);
    }
    
    async findByConversationPublic(data: Partial<MessageFindByConversationInput>, metadata: Metadata=new Metadata()): Promise<MessageFindByConversationResult> {
      return postToUnaryPublic<MessageFindByConversationResult>(this.serviceName, 'findByConversation', data, metadata);
    }
  
  }
