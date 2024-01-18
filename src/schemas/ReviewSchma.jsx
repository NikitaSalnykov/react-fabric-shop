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

    // extraPhotos: yup
    // .mixed()
    // .test('fileSize', 'Фото слишком большое', (value) => {
    //   if (!value) return true; // Если файл не выбран, пропустить проверку
    //   return value.size <= 5242880; // 5 MB
    // })
    // .test('fileType', 'Поддерживаются только файлы JPEG или PNG', (value) => {
    //   if (!value) return true; // Если файл не выбран, пропустить проверку
    //   return ['image/jpeg', 'image/png'].includes(value.type);
    // }),
  rating: yup
    .number('Оценка должна быть числом')
    .min(1, 'Поставьте оценку')
    .max(5, 'Оценка должна быть не более 5'),
  });
