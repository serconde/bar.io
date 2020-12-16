import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    infoA: [Validators.required],
    infoB: [Validators.required],
    infoC: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
