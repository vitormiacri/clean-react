import { FieldValidation } from '@/validation/protocols/field-validation';
import { RequiredFiedlError } from '@/validation/errors';

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return value ? null : new RequiredFiedlError();
  }
}
