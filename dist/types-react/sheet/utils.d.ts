import { EnumLabelDict, ImporterOutputFieldType, ImporterValidationError, SheetColumnDefinition, SheetColumnReferenceDefinition, SheetDefinition, SheetRow, SheetState, SheetViewMode } from '../types';
export declare function extractReferenceColumnPossibleValues(columnDefinition: SheetColumnReferenceDefinition, allData: SheetState[]): (string | number)[];
export declare function findRowIndex(allData: SheetState[], sheetId: string, row: SheetRow): number;
export declare function useFilteredRowData(data: SheetState, allData: SheetState[], viewMode: SheetViewMode, sheetValidationErrors: ImporterValidationError[], errorColumnFilter: string | null, sheetDefinition: SheetDefinition, searchPhrase: string): any;
export declare function isColumnReadOnly(columnDefinition: SheetColumnDefinition): boolean;
export declare function getEnumLabelDict(sheetDefinitions: SheetDefinition[]): {
    [k: string]: {
        [k: string]: {
            [k: string]: string;
        };
    };
};
export declare function getCellDisplayValue(columnDefinition: SheetColumnDefinition, value: ImporterOutputFieldType, enumLabelDict: EnumLabelDict): {
    displayValue: string | number;
    valueEmpty: boolean;
};
//# sourceMappingURL=utils.d.ts.map