import { SelectOption } from './Select';
type Tab = SelectOption<string>;
interface Props {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    idPrefix?: string;
}
export default function Tabs({ tabs, activeTab, onTabChange, idPrefix, }: Props): import("preact").JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map