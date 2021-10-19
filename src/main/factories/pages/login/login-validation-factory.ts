import { ValidationComposite } from '@/validation/validators';
import { ValidationBuilder as Builder } from '@/validation/builder/validation-builder';

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...Builder.field('email').required().email().build(),
    ...Builder.field('password').required().min(5).build(),
  ]);
};
