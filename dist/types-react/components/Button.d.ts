import { CSSProperties, ReactNode } from '../../shims/react-compat-shim.js';
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
export default function Button({ children, variant, disabled, onClick, withFullWidth, }: Props): any;
export {};
//# sourceMappingURL=Button.d.ts.map