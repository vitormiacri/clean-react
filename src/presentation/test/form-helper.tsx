import { RenderResult } from '@testing-library/react';

export const testChildCount = (
  sut: RenderResult,
  fieldName: string,
  count: number
): void => {
  const erroWrap = sut.getByTestId(fieldName);
  expect(erroWrap.childElementCount).toBe(count);
};

export const testButtonIsDisabled = (
  sut: RenderResult,
  fieldName: string,
  isDisabled: boolean
): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement;
  expect(button.disabled).toBe(isDisabled);
};

export const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const emailStatus = sut.getByTestId(`${fieldName}-status`);
  expect(emailStatus.title).toBe(validationError || 'Tudo certo');
  expect(emailStatus.textContent).toBe(validationError ? '🔴' : '🔵');
};
