import * as yup from 'yup';

export const orderShoppingCart = yup.object({
  name: yup
    .string('Имя должно состоять из исключительно из букв')
    .min(2)
    .max(16)
    .required('Укажите имя'),
  surname: yup
    .string('Фамилия должно состоять из исключительно из букв')
    .min(2)
    .max(16),

  tel: yup
    .string('Номер должен содержать только цифры и символы')
    .min(11)
    .max(12)
    .required('Укажите номер телефона в фомате +11234567890'),
  delivery: yup.string().max(120),
});
