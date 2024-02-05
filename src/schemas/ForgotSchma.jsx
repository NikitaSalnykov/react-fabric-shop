import * as yup from 'yup';

export const ForgotSchma = yup.object({
  email: yup
    .string('Введите действительный email')
    .email('Введите действительный email')
    .required('Укажите email'),
});
