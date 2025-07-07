import { ReactNode } from 'preact/compat';
export interface SelectOption<T> {
    label: string;
    value: T;
    icon?: ReactNode;
    group?: string;
}
interface Props<T> {
    value: T[] | T | null;
    options: SelectOption<T>[];
    onChange: (value: T[] | T | null) => void;
    multiple?: boolean;
    compareFunction?: (a: T, b: T) => boolean;
    clearable?: boolean;
    searchable?: boolean;
    placeholder?: string;
    classes?: string;
    displayPlaceholderWhenSelected?: boolean;
    'aria-label'?: string;
}
export default function Select<T>({ value, options, onChange, multiple, compareFunction, clearable, searchable, placeholder, classes, displayPlaceholderWhenSelected, ...props }: Props<T>): import("preact").JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map