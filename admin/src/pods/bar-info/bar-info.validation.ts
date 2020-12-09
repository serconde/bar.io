import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { isNumber } from '@lemoncode/fonk-is-number-validator';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    address: [Validators.required],
    numberPhone: [
      Validators.required,
      isNumber,
      { validator: Validators.pattern, customArgs: { pattern: '[0-9]{9}' } },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
