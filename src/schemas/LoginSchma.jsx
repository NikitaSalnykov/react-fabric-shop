import * as yup from 'yup';

export const LoginSchma = yup.object({
  email: yup
    .string('Введите действительный email')
    .email('Введите действительный email')
    .required('Укажите email'),

  password: yup
    .string('Пароль должен содержать минимум 8 символов')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .required('Укажите пароль'),
});
