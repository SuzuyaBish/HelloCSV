import { EnumLabelDict, ImporterOutputFieldType, SheetColumnDefinition, SheetState } from '../../types';
interface Props {
    rowId: string;
    columnDefinition: SheetColumnDefinition;
    value: ImporterOutputFieldType;
    onUpdated: (value: ImporterOutputFieldType) => void;
    allData: SheetState[];
    clearRowsSelection: () => void;
    errorsText: string;
    enumLabelDict: EnumLabelDict;
}
export default function SheetDataEditorCell({ rowId, columnDefinition, value, onUpdated, allData, clearRowsSelection, errorsText, enumLabelDict, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetDataEditorCell.d.ts.map