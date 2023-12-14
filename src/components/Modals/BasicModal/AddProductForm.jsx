import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ProductSchema } from './ProductSchema';
import Svg from '../../Svg/Svg';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]';
const hoverStyle =
  'transition duration-200 ease-in-out cursor-pointer hover:opaarticle-80';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ";
const inputStyle =
  " outline-offset-0 outline-0  border border-blue outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]";


export const AddProductForm = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      color: "",
      price: "",
      description: "",
      article: "",
      mainPhoto: "",
      extraPhotos: "",
    },

    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: ProductSchema,

    onSubmit: ({ name, category, color, price, description, article, mainPhoto, extraPhotos }) => {
      const updateUser = {
        name,
        category,
        color,
        price,
        description,
        article,
        mainPhoto,
        extraPhotos,
      };

      const formData = createUserFormData(updateUser);
      dispatch(update(formData));
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const createUserFormData = (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('color', data.color);
    formData.append('price', data.price);
    formData.append('description', data.description);
    formData.append('article', data.article);
    formData.append('mainPhoto', data.mainPhoto);
    formData.append('extraPhotos', data.extraPhotos)

    return formData;
  };



  return (
    <form
      noValidate
      autoComplete="off"
      className="flex flex-col flex-wrap-reverse"
      onSubmit={formik.handleSubmit}
    >

      <div className="mdOnly:flex flex-row-reverse gap-[71px]">
        {/* All text-fields */}
        <div className="flex flex-col gap-[20px]">
          {/* Name */}

          <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="name">
              Название:
            </label>
            <input
              className={`${inputStyle} ${errors['name'] && 'border-rose-400'}`}
              type="text"
              id="name"
              name="name"
              value={formikValues['name']}
              onChange={formik.handleChange}
            />
            {errors['name'] && (
              <p className={errorTextStyle}>{errors['name']}</p>
            )}
          </div>

          {/* category */}
          <div className="flex justify-between w-full relative">
            <label className={labelStyle} htmlFor="category">
              Категория:
            </label>
            <input
              className={`${inputStyle} ${
                errors['category'] && 'border-rose-400'
              }`}
              type="text"
              id="category"
              name="category"
              value={formikValues['category']}
              onChange={formik.handleChange}
            />
            {errors['category'] && (
              <p className={errorTextStyle}>{errors['category']}</p>
            )}
          </div>

          {/* color */}
          <div className="flex justify-between w-full relative">
            <label className={labelStyle} htmlFor="color">
              Цвет:
            </label>
            <input
              className={`${inputStyle} ${
                errors['color'] && 'border-rose-400'
              }`}
              type="tel"
              id="color"
              name="color"
              placeholder={'+380123456789'}
              value={formikValues['color']}
              onChange={formik.handleChange}
            />
            {errors['color'] && (
              <p className={errorTextStyle}>{errors['color']}</p>
            )}
          </div>

          {/* price */}
          <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="price">
              Цена:
            </label>
            <input
              className={`${inputStyle} ${errors['price'] && 'border-rose-400'}`}
              type="text"
              id="price"
              name="price"
              value={formikValues['price']}
              onChange={formik.handleChange}
            />
            {errors['price'] && (
              <p className={errorTextStyle}>{errors['price']}</p>
            )}
          </div>

                    {/* description */}
                    <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="description">
              Описание:
            </label>
            <input
              className={`${inputStyle} ${errors['description'] && 'border-rose-400'}`}
              type="text"
              id="description"
              name="description"
              value={formikValues['description']}
              onChange={formik.handleChange}
            />
            {errors['description'] && (
              <p className={errorTextStyle}>{errors['description']}</p>
            )}
          </div>

                    {/* article */}
                    <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="article">
              Артикль:
            </label>
            <input
              className={`${inputStyle} ${errors['article'] && 'border-rose-400'}`}
              type="text"
              id="article"
              name="article"
              value={formikValues['article']}
              onChange={formik.handleChange}
            />
            {errors['article'] && (
              <p className={errorTextStyle}>{errors['article']}</p>
            )}
          </div>

                    {/* mainPhoto */}
                    <div className="flex flex-col justify-between relative items-center gap-2">
            <label className={labelStyle} htmlFor="mainPhoto">
            Главная фотка:
            </label>
            <input
              className={``}
              type="file"
              id="mainPhoto"
              name="mainPhoto"
              value={formikValues['mainPhoto']}
              accept="image/jpeg, image/png"
              onChange={(e) => {
                const file = e.target.files[0];
              }}
            />
            {errors['mainPhoto'] && (
              <p className={errorTextStyle}>{errors['mainPhoto']}</p>
            )}
          </div>

                              {/* extraPhotos */}
                              <div className="flex flex-col justify-between relative items-center gap-2">
            <label className={labelStyle} htmlFor="extraPhotos">
            Дополнительные фото до 3х:
            </label>
            <input
              className=""
              type="file"
              id="extraPhotos"
              name="extraPhotos"
              value={formikValues['extraPhotos']}
              accept="image/jpeg, image/png"
              onChange={(e) => {
                const file = e.target.files[0];
              }}
            />
            {errors['extraPhotos'] && (
              <p className={errorTextStyle}>{errors['extraPhotos']}</p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
