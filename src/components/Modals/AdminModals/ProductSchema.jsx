import * as yup from 'yup';

export const productSchema = yup.object({
  name: yup
    .string('Названиие должно состоять только из букв')
    .min(2, 'Название должно содержать минимум 2 символа')
    .required('Укажите название'),
  category: yup
    .string('Цвет должен состоять только из букв')
    .min(2, 'Цвет должна содержать минимум 2 символа')
    .required('Укажите название'),

  color: yup
  .string('Цвет должен состоять только из букв')
  .min(2, 'Цвет должна содержать минимум 2 символа')
  .required('Укажите название'),


  price: yup
    .number('Цена должна содержать только цифры')
    .required('Укажите цену'),

  pricePerMeter: yup
  .number('Цена должна содержать только цифры'),

    discount: yup
    .number('Скидка должна содержать только цифры')
    .min(0, 'Скидка должна быть минимим 0')
    .max(100, 'Скидка должна быть минимим 100')
    .typeError('Скидка должна содержать только цифры'),
  
    description: yup
    .string('Описание должно должно состоять только из букв')
    .required('Укажите описание'),

    mainPhoto: yup
    .mixed()
    .test('maxFiles', 'Максимальное количество файлов - 1', (value) => {
      if (!value) return true;
      return value.length <= 1;
    })    .required('Добавьте фото'),
    
    extraPhotos: yup
    .mixed()
    .test('maxFiles', 'Максимальное количество файлов - 3', (value) => {
      if (!value) return true;
      return value.length <= 3;
    })
    .nullable(),
});
