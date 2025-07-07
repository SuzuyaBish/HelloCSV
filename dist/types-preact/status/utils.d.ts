import { SheetState, SheetDefinition, EnumLabelDict, CsvDownloadMode } from '../types';
export declare function getTotalRows(sheetData: SheetState[]): number;
export declare function downloadAllSheetsAsCsv(sheetData: SheetState[], sheetDefinitions: SheetDefinition[], enumLabelDict: EnumLabelDict, csvDownloadMode: CsvDownloadMode): void;
export declare const getDataSize: (sheetData: SheetState[], sheetDefinitions: SheetDefinition[], enumLabelDict: EnumLabelDict, csvDownloadMode: CsvDownloadMode) => number;
//# sourceMappingURL=utils.d.ts.map