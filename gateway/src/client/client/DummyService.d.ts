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
import { Metadata } from 'nice-grpc';
export declare class DummyService {
    private readonly serviceName;
    createOne(data: Partial<DummyCreateOneInput>, metadata?: Metadata): Promise<Dummy>;
    createOnePublic(data: Partial<DummyCreateOneInput>, metadata?: Metadata): Promise<Dummy>;
    updateOne(data: Partial<DummyUpdateOneInput>, metadata?: Metadata): Promise<Dummy>;
    updateOnePublic(data: Partial<DummyUpdateOneInput>, metadata?: Metadata): Promise<Dummy>;
    findOne(data: Partial<DummyFindOneInput>, metadata?: Metadata): Promise<Dummy>;
    findOnePublic(data: Partial<DummyFindOneInput>, metadata?: Metadata): Promise<Dummy>;
    removeOne(data: Partial<DummyRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
    removeOnePublic(data: Partial<DummyRemoveOneInput>, metadata?: Metadata): Promise<Empty>;
    search(data: Partial<DummySearchInput>, metadata?: Metadata): Promise<DummySearchResult>;
    searchPublic(data: Partial<DummySearchInput>, metadata?: Metadata): Promise<DummySearchResult>;
}
