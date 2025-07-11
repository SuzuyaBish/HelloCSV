import { MapperOption, MapperOptionValue } from '../../types';
interface Props {
    csvHeader: string;
    currentMapping: MapperOptionValue | null;
    setMapping: (header: MapperOptionValue | null) => void;
    mappingSelectionOptions: MapperOption[];
    onMouseEnter: () => void;
}
export default function HeaderMapperSelection({ csvHeader, setMapping, currentMapping, mappingSelectionOptions, onMouseEnter, }: Props): any;
export {};
//# sourceMappingURL=HeaderMapperSelection.d.ts.map