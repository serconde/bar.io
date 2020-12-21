import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { minNumber } from '@lemoncode/fonk-min-number-validator';

const validationSchema: ValidationSchema = {
  field: {
    name: [
      {
        validator: Validators.required,
        message: 'El nombre del producto es obligatorio',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'El nombre debe tener al menos 3 caracteres',
      },
    ],
    price: [
      {
        validator: minNumber.validator,
        customArgs: { minValue: 0.1 },
        message: 'El precio debe ser mayor que 0',
      },
    ],
    categoryId: [
      {
        validator: Validators.required,
        message: 'La categoría del producto es obligatoria',
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);
