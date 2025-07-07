import { ImporterOutputFieldType } from '../../types';
import { ImporterValidatorDefinitionBase } from '../types';
import { Validator } from './base';
export declare class UniqueValidator extends Validator {
    seen: Set<ImporterOutputFieldType>;
    constructor(definition: ImporterValidatorDefinitionBase);
    isValid(fieldValue: ImporterOutputFieldType): string | undefined;
}
//# sourceMappingURL=unique_validator.d.ts.map