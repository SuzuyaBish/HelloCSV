interface Props {
    activeButton: string;
    buttons: ButtonGroupDefinition[];
}
export type ButtonGroupDefinition = {
    value: string;
    label: string;
    onClick: () => void;
    variant: 'default' | 'danger';
};
export default function ButtonGroup({ activeButton, buttons }: Props): any;
export {};
//# sourceMappingURL=ButtonGroup.d.ts.map