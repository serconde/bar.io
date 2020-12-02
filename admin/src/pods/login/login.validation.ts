import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    email: [Validators.required, Validators.email],
    password: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
