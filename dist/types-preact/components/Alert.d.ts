type VariantType = 'info' | 'success' | 'error' | 'warning';
interface Props {
    variant?: VariantType;
    header?: string;
    description: string;
}
export default function Alert({ variant, header, description, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=Alert.d.ts.map