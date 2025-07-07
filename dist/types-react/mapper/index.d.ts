import { ParsedFile, SheetColumnDefinition, SheetDefinition, ColumnMapping, MappedData } from '../types';
export { default as HeaderMapper } from './components/HeaderMapper';
export declare function getMappedData(sheetDefinitions: SheetDefinition[], mappings: ColumnMapping[], parsedFile: ParsedFile): MappedData;
export declare function allowUserToMapColumn(columnDefinition: SheetColumnDefinition): boolean;
//# sourceMappingURL=index.d.ts.map