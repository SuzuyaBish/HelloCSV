import { ReactNode } from 'preact/compat';
type BadgeVariant = 'primary' | 'success' | 'error';
interface Props {
    children?: ReactNode;
    variant?: BadgeVariant;
}
export default function Badge({ children, variant }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=Badge.d.ts.map