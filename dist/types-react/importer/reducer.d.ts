import { Dispatch } from '../../react';
import { ImporterAction, ImporterState, PersistenceConfig, SheetDefinition } from '../types';
import { ReactNode } from '../../shims/react-compat-shim.js';
export declare function ReducerProvider({ sheets, persistenceConfig, children, }: {
    sheets: SheetDefinition[];
    persistenceConfig: PersistenceConfig;
    children: ReactNode;
}): any;
export declare function useImporterState(): ImporterState;
export declare function useImporterStateDispatch(): Dispatch<ImporterAction>;
//# sourceMappingURL=reducer.d.ts.map