import { ThemeVariant, ImporterValidationError, ParsedFile, SheetDefinition, SheetState, MappedData, OnDataColumnsMappedCallback, ColumnMapping, SheetRow, ImportStatistics, CustomFileLoader, Translation } from '../types';
export interface ImporterDefinition {
    sheets: SheetDefinition[];
    translationResources?: Record<string, Translation>;
    theme?: ThemeVariant;
    onDataColumnsMapped?: OnDataColumnsMappedCallback;
    customFileLoaders?: CustomFileLoader[];
    allowManualDataEntry?: boolean;
    onComplete: (state: ImporterState, onProgress: (progress: number) => void) => Promise<void> | Promise<ImportStatistics>;
    locale?: string;
    preventUploadOnValidationErrors?: boolean | ((errors: ImporterValidationError[]) => boolean);
    maxFileSizeInBytes?: number;
    onSummaryFinished?: () => void;
    customSuggestedMapper?: (sheetDefinitions: SheetDefinition[], csvHeaders: string[]) => ColumnMapping[] | Promise<ColumnMapping[]>;
    persistenceConfig?: PersistenceConfig;
    csvDownloadMode?: CsvDownloadMode;
}
export type CsvDownloadMode = 'value' | 'label';
export interface PersistenceConfig {
    enabled: boolean;
    customKey?: string;
}
/**
 * mapping - user is mapping the columns from the file to the sheet columns
 * preview - user is reviewing the data to be imported or is imputing data manually
 * submit  - user is submitting the data - during/after the onComplete callback
 * completed - the import process is completed
 * failed - the import process failed
 */
export type ImporterMode = 'upload' | 'mapping' | 'preview' | 'submit' | 'completed' | 'failed';
export interface ImporterState {
    sheetDefinitions: SheetDefinition[];
    currentSheetId: string;
    mode: ImporterMode;
    validationErrors: ImporterValidationError[];
    sheetData: SheetState[];
    parsedFile?: ParsedFile;
    rowFile?: File;
    columnMappings?: ColumnMapping[];
    importProgress: number;
    importStatistics?: ImportStatistics;
}
export type ImporterOutputFieldType = string | number | undefined;
export interface CellChangedPayload {
    sheetId: string;
    rowIndex: number;
    value: SheetRow;
}
export interface RemoveRowsPayload {
    sheetId: string;
    rows: SheetRow[];
}
export type ImporterAction = {
    type: 'ENTER_DATA_MANUALLY';
    payload: {
        amountOfEmptyRowsToAdd: number;
    };
} | {
    type: 'FILE_PARSED';
    payload: {
        parsed: ParsedFile;
        rowFile: File;
    };
} | {
    type: 'UPLOAD';
} | {
    type: 'COLUMN_MAPPING_CHANGED';
    payload: {
        mappings: ColumnMapping[];
    };
} | {
    type: 'DATA_MAPPED';
    payload: {
        mappedData: MappedData;
    };
} | {
    type: 'CELL_CHANGED';
    payload: CellChangedPayload;
} | {
    type: 'REMOVE_ROWS';
    payload: RemoveRowsPayload;
} | {
    type: 'ADD_EMPTY_ROW';
} | {
    type: 'SHEET_CHANGED';
    payload: {
        sheetId: string;
    };
} | {
    type: 'SUBMIT';
} | {
    type: 'PROGRESS';
    payload: {
        progress: number;
    };
} | {
    type: 'COMPLETED';
    payload: {
        importStatistics?: ImportStatistics;
    };
} | {
    type: 'FAILED';
} | {
    type: 'PREVIEW';
} | {
    type: 'MAPPING';
} | {
    type: 'RESET';
} | {
    type: 'SET_STATE';
    payload: {
        state: ImporterState;
    };
};
type WithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type ImporterDefinitionWithDefaults = WithRequired<ImporterDefinition, 'maxFileSizeInBytes' | 'persistenceConfig' | 'csvDownloadMode' | 'allowManualDataEntry'>;
export {};
//# sourceMappingURL=types.d.ts.map