import { RequiredFieldValidation } from '@/validation/validators';
import { ValidationBuilder as sut } from './validation-builder';

describe('ValidationBuiler', () => {
  test('Should return RequiredFiedlValidation', () => {
    const validations = sut.field('any_field').required().build();
    expect(validations).toEqual([new RequiredFieldValidation('any_field')]);
  });
});
