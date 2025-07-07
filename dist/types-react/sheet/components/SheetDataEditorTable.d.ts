import { Table } from '@tanstack/react-table';
import { EnumLabelDict, SheetDefinition, SheetRow, SheetState, ImporterOutputFieldType, ImporterValidationError } from '../../types';
import { RefObject } from '../../../shims/react-compat-shim.js';
interface Props {
    table: Table<SheetRow>;
    sheetDefinition: SheetDefinition;
    allData: SheetState[];
    sheetValidationErrors: ImporterValidationError[];
    onCellValueChanged: (rowIndex: number, columnId: string, value: ImporterOutputFieldType) => void;
    setSelectedRows: (rows: SheetRow[]) => void;
    tableContainerRef: RefObject<HTMLDivElement>;
    enumLabelDict: EnumLabelDict;
}
export default function SheetDataEditorTable({ table, sheetDefinition, allData, sheetValidationErrors, onCellValueChanged, setSelectedRows, tableContainerRef, enumLabelDict, }: Props): any;
export {};
//# sourceMappingURL=SheetDataEditorTable.d.ts.map