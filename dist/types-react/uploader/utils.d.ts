import { SheetDefinition } from '../types';
import { CustomFileLoader, ImporterRequirementsType } from './types';
export declare function getImporterRequirements(sheets: SheetDefinition[]): ImporterRequirementsType;
export declare const formatFileSize: (bytes: number) => string;
export declare const convertCsvFile: (file: File, customFileLoaders: CustomFileLoader[] | undefined) => Promise<File>;
//# sourceMappingURL=utils.d.ts.map