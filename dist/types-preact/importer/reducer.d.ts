import { Dispatch } from 'preact/hooks';
import { ImporterAction, ImporterState, PersistenceConfig, SheetDefinition } from '../types';
import { ReactNode } from 'preact/compat';
export declare function ReducerProvider({ sheets, persistenceConfig, children, }: {
    sheets: SheetDefinition[];
    persistenceConfig: PersistenceConfig;
    children: ReactNode;
}): import("preact").JSX.Element;
export declare function useImporterState(): ImporterState;
export declare function useImporterStateDispatch(): Dispatch<ImporterAction>;
//# sourceMappingURL=reducer.d.ts.map