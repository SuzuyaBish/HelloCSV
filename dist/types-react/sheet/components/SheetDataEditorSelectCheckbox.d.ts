import { SheetRow } from '../../types';
import { Row } from '@tanstack/react-table';
import { SetStateAction, Dispatch } from '../../../shims/react-compat-shim.js';
interface Props {
    row: Row<SheetRow>;
    selectedRows: SheetRow[];
    setSelectedRows: Dispatch<SetStateAction<SheetRow[]>>;
}
export default function SheetDataEditorSelectCheckbox({ row, selectedRows, setSelectedRows, }: Props): any;
export {};
//# sourceMappingURL=SheetDataEditorSelectCheckbox.d.ts.map