import { ReactNode } from 'preact/compat';
interface Props {
    className?: string;
    children?: ReactNode;
    variant?: 'default' | 'muted';
    withPadding?: boolean;
}
declare const Card: import('preact').FunctionalComponent<import('preact/compat').PropsWithoutRef<Props> & {
    ref?: import('preact').Ref<HTMLDivElement> | undefined;
}>;
export default Card;
//# sourceMappingURL=Card.d.ts.map