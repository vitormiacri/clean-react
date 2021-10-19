import { ValidationBuilder as Builder } from '@/validation/builder/validation-builder';
import { ValidationComposite } from '@/validation/validators';
import { makeLoginValidation } from './login-validation-factory';

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation();
    expect(composite).toEqual(
      ValidationComposite.build([
        ...Builder.field('email').required().email().build(),
        ...Builder.field('password').required().min(5).build(),
      ])
    );
  });
});
