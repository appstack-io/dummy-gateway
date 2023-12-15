import { Empty } from './google/protobuf/empty';

  export interface DummyCreateOneInput {
  text: string;
  isPublic: boolean;
}

export interface Dummy {
  id: string;
  createdAt: number;
  updatedAt: number;
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

export interface DummySearchInput {
  filter: DummySearchFilter | undefined;
  opts: DummySearchOpts | undefined;
}

export interface DummySearchFilter {
  text: string;
}

export interface DummySearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface DummySearchResult {
  meta: DummySearchResultMeta | undefined;
  results: Dummy[];
}

export interface DummySearchResultMeta {
  offset: number;
}
  import { postToUnary, postToUnaryPublic } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class DummyService {
    private readonly serviceName: string = "DummyService";
    
    
    async createOne(data: Partial<DummyCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnary<Dummy>(this.serviceName, 'createOne', data, metadata);
    }
    
    async createOnePublic(data: Partial<DummyCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnaryPublic<Dummy>(this.serviceName, 'createOne', data, metadata);
    }
  
    async updateOne(data: Partial<DummyUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnary<Dummy>(this.serviceName, 'updateOne', data, metadata);
    }
    
    async updateOnePublic(data: Partial<DummyUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnaryPublic<Dummy>(this.serviceName, 'updateOne', data, metadata);
    }
  
    async findOne(data: Partial<DummyFindOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnary<Dummy>(this.serviceName, 'findOne', data, metadata);
    }
    
    async findOnePublic(data: Partial<DummyFindOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnaryPublic<Dummy>(this.serviceName, 'findOne', data, metadata);
    }
  
    async removeOne(data: Partial<DummyRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, metadata);
    }
    
    async removeOnePublic(data: Partial<DummyRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnaryPublic<Empty>(this.serviceName, 'removeOne', data, metadata);
    }
  
    async search(data: Partial<DummySearchInput>, metadata: Metadata=new Metadata()): Promise<DummySearchResult> {
      return postToUnary<DummySearchResult>(this.serviceName, 'search', data, metadata);
    }
    
    async searchPublic(data: Partial<DummySearchInput>, metadata: Metadata=new Metadata()): Promise<DummySearchResult> {
      return postToUnaryPublic<DummySearchResult>(this.serviceName, 'search', data, metadata);
    }
  
  }
