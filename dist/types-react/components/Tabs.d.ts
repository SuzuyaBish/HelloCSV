import { SelectOption } from './Select';
type Tab = SelectOption<string>;
interface Props {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    idPrefix?: string;
}
export default function Tabs({ tabs, activeTab, onTabChange, idPrefix, }: Props): any;
export {};
//# sourceMappingURL=Tabs.d.ts.map