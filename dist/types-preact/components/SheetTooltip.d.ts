import { ReactNode } from 'preact/compat';
type Variant = 'error' | 'info';
interface Props {
    variant?: Variant;
    children?: ReactNode;
    tooltipText?: string;
}
export default function SheetTooltip({ variant, children, tooltipText, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=SheetTooltip.d.ts.map