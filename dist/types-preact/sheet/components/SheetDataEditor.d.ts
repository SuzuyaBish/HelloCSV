import { SheetDefinition, SheetState, EnumLabelDict, CellChangedPayload, ImporterValidationError, RemoveRowsPayload } from '../../types';
interface Props {
    sheetDefinition: SheetDefinition;
    data: SheetState;
    sheetValidationErrors: ImporterValidationError[];
    setRowData: (payload: CellChangedPayload) => void;
    removeRows: (payload: RemoveRowsPayload) => void;
    addEmptyRow: () => void;
    resetState: () => void;
    enumLabelDict: EnumLabelDict;
}
export default function SheetDataEditor({ sheetDefinition, data, sheetValidationErrors, setRowData, removeRows, addEmptyRow, resetState, enumLabelDict, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetDataEditor.d.ts.map