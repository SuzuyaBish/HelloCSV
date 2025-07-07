import { SheetRow } from '../../types';
import { Row } from '@tanstack/react-table';
import { SetStateAction, Dispatch } from 'preact/compat';
interface Props {
    row: Row<SheetRow>;
    selectedRows: SheetRow[];
    setSelectedRows: Dispatch<SetStateAction<SheetRow[]>>;
}
export default function SheetDataEditorSelectCheckbox({ row, selectedRows, setSelectedRows, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetDataEditorSelectCheckbox.d.ts.map