import * as yup from 'yup';

export const ResetPasswordSchma = yup.object({
  password: yup
    .string('Пароль должен содержать минимум 8 символов')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .required('Укажите пароль'),

  confirmPassword: yup
    .string('Пароли должны совпадать')
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),
});
