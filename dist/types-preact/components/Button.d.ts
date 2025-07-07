import { CSSProperties, ReactNode } from 'preact/compat';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger';
interface Props {
    children?: ReactNode;
    variant?: ButtonVariant;
    outline?: boolean;
    disabled?: boolean;
    withFullWidth?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
}
export default function Button({ children, variant, disabled, onClick, withFullWidth, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map