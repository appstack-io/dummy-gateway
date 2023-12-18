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
  import { postToUnary } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class DummyService {
    private readonly serviceName: string = "DummyService";
    
    constructor(private opts?: {port?: string, host?: string}){}
    
    
    async createOne(data: Partial<DummyCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnary<Dummy>(this.serviceName, 'createOne', data, metadata, this.opts);
    }
  
    async updateOne(data: Partial<DummyUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnary<Dummy>(this.serviceName, 'updateOne', data, metadata, this.opts);
    }
  
    async findOne(data: Partial<DummyFindOneInput>, metadata: Metadata=new Metadata()): Promise<Dummy> {
      return postToUnary<Dummy>(this.serviceName, 'findOne', data, metadata, this.opts);
    }
  
    async removeOne(data: Partial<DummyRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, metadata, this.opts);
    }
  
    async search(data: Partial<DummySearchInput>, metadata: Metadata=new Metadata()): Promise<DummySearchResult> {
      return postToUnary<DummySearchResult>(this.serviceName, 'search', data, metadata, this.opts);
    }
  
  }
