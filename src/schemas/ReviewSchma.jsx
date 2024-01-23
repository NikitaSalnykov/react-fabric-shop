import * as yup from 'yup';

export const ReviewSchma = yup.object({
  author: yup
    .string('Имя должно состоять только из букв')
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(16, 'Имя должно содержать максимум 16 символов')
    .required('Укажите имя'),
  text: yup
    .string('Отзыв должен состоять только из букв')
    .min(40, 'Отзыв должен содержать минимум 40 символов')
    .max(450, 'Отзыв должен содержать максимум 16 символов')
    .required('Оставьте отзыв'),

  extraPhotos: yup
    .mixed()
    .test('maxFiles', 'Максимальное количество файлов - 3', (value) => {
      if (!value) return true;
      return value.length <= 3;
    })
    .nullable(),
    

  rating: yup
    .number('Оценка должна быть числом')
    .min(1, 'Поставьте оценку')
    .max(5, 'Оценка должна быть не более 5'),
});
