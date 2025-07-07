import { PropsWithoutRef, ReactNode } from 'preact/compat';
import { ImporterOutputFieldType } from '../types';
interface Props {
    value: ImporterOutputFieldType;
    onBlur?: (value: ImporterOutputFieldType) => void;
    onChange?: (value: ImporterOutputFieldType) => void;
    placeholder?: string;
    iconBuilder?: (props: PropsWithoutRef<ReactNode>) => ReactNode;
    classes?: string;
    clearable?: boolean;
    type?: 'text' | 'number';
    'aria-label'?: string;
}
declare const Input: import('preact').FunctionalComponent<PropsWithoutRef<Props> & {
    ref?: import('preact').Ref<HTMLInputElement> | undefined;
}>;
export default Input;
//# sourceMappingURL=Input.d.ts.map