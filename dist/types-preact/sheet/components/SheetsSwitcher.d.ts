interface Props {
    onSheetChange: (sheetId: string) => void;
    sheetCountDict: Record<string, number>;
    idPrefix?: string;
}
export default function SheetsSwitcher({ onSheetChange, sheetCountDict, idPrefix, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetsSwitcher.d.ts.map