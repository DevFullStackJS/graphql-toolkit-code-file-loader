import { SchemaPointerSingle, DocumentPointerSingle, SingleFileOptions, Source, UniversalLoader } from '@graphql-toolkit/common';
import { GraphQLTagPluckOptions } from '@graphql-toolkit/graphql-tag-pluck';
export declare type CodeFileLoaderOptions = {
    require?: string | string[];
    pluckConfig?: GraphQLTagPluckOptions;
    fs?: typeof import('fs');
    path?: typeof import('path');
    noPluck?: boolean;
} & SingleFileOptions;
export declare class CodeFileLoader implements UniversalLoader<CodeFileLoaderOptions> {
    loaderId(): string;
    canLoad(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): Promise<boolean>;
    canLoadSync(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): boolean;
    load(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): Promise<Source>;
    loadSync(pointer: SchemaPointerSingle | DocumentPointerSingle, options: CodeFileLoaderOptions): Source;
}
