import { CsvDownloadMode, EnumLabelDict, ImporterOutputFieldType, SheetColumnReferenceDefinition, SheetDefinition, SheetRow, SheetState } from '../types';
export declare const isUndefinedOrNull: (a: any) => boolean;
export declare const isPresent: (a: any) => boolean;
export declare const filterEmptyRows: (state: SheetState) => SheetRow[];
export declare function isEmptyCell(value: any): value is null | undefined;
export declare const removeDuplicates: (array: any[]) => any[];
export declare function normalizeValue(value: ImporterOutputFieldType): string | null;
export declare function generateCsvContent(sheetDefinition: SheetDefinition, data: SheetRow[], enumLabelDict: EnumLabelDict, csvDownloadMode: CsvDownloadMode): Blob;
export declare function downloadSheetAsCsv(sheetDefinition: SheetDefinition, data: SheetRow[], enumLabelDict: EnumLabelDict, csvDownloadMode: CsvDownloadMode): void;
export declare function getLabelDict(columnDefinition: SheetColumnReferenceDefinition, enumLabelDict: EnumLabelDict): {
    [value: string]: ImporterOutputFieldType;
};
export declare function getLabelDictValue(labelDict: Record<string, ImporterOutputFieldType>, value: ImporterOutputFieldType): ImporterOutputFieldType;
//# sourceMappingURL=index.d.ts.map