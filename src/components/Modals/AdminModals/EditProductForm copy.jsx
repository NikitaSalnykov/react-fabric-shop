import { useFormik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../../Redux/products/productsOperation';
import { useEffect, useState } from 'react';
import { categories } from '../../../assets/categories';
import {
  getIsLoadingProducts,
  getIsProductCreated,
} from '../../../Redux/products/productsSelectors';
import { resetProductCreated } from '../../../Redux/products/productsSlice';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]';
// const hoverStyle =
//   'transition duration-200 ease-in-out cursor-pointer hover:opaarticle-80';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ";
const inputStyle =
  " outline-offset-0 outline-0  border border-blue outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]";

export const EditProductForm = ({ onCloseModal, product }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingProducts);
  const [isMyCategory, setMyCategory] = useState(false);
  const isProductCreated = useSelector(getIsProductCreated);
  const [showPricePerMeterInput, setShowPricePerMeterInput] = useState(product.pricePerMeter ? true : false)

  useEffect(() => {
    if (isProductCreated) {
      onCloseModal();
      dispatch(resetProductCreated());
    }
  }, [isProductCreated, onCloseModal, dispatch]);

  const formik = useFormik({
    initialValues: {
      name: product.name,
      category: product.category,
      color: product.color,
      price: product.price,
      pricePerMeter: product.pricePerMeter || '',
      description: product.description,
      article: product.article,
      discount: product.discount || 0,
      mainPhoto: null,
      extraPhotos: null,
    },

    validateOnChange: false,
    validateOnBlur: true,
    // validationSchema: ProductSchema,

    onSubmit: ({
      name,
      category,
      color,
      price,
      description,
      article,
      mainPhoto,
      extraPhotos,
      discount,
    }) => {
      const updateUser = {
        name,
        category,
        color,
        price,
        description,
        article,
        mainPhoto,
        extraPhotos,
        discount,
      };

      const formData = createUserFormData(updateUser);
      console.log('ss', extraPhotos);
      dispatch(updateProduct({ id: product._id, arg: formData }));

      // if (!isLoading) onCloseModal();
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
    formData.append('discount', data.discount);
    formData.append('description', data.description);
    formData.append('article', data.article);
    if (data.mainPhoto) {
      formData.append('mainPhoto', data.mainPhoto);
    }

    // Добавляем extraPhotos, если они существуют
    if (data.extraPhotos && data.extraPhotos.length > 0) {
      [...data.extraPhotos].forEach((file) => {
        formData.append('extraPhotos', file);
      });
    }
    return formData;
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className="flex flex-col flex-wrap-reverse"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-row-reverse gap-[71px]">
        {/* All text-fields */}
        <div className="flex flex-col gap-[20px]">
          {/* Name */}

          <div className="flex justify-between relative flex-wrap gap-2">
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
          <div className="flex-col">
              <div className="flex justify-between w-full relative flex-wrap gap-2">
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
          </div>

          {/* color */}
          <div className="flex justify-between w-full relative flex-wrap gap-2">
            <label className={labelStyle} htmlFor="color">
              Цвет:
            </label>
            <input
              className={`${inputStyle} ${
                errors['color'] && 'border-rose-400'
              }`}
              type="text"
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
          <div className="flex justify-between relative flex-wrap gap-2">
            <label className={labelStyle} htmlFor="price">
              Цена:
            </label>
            <input
              className={`${inputStyle} ${
                errors['price'] && 'border-rose-400'
              }`}
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

          
                    {/* pricePerMeter */}
         <div className={`flex  w-full relative flex-wrap gap-2 ${showPricePerMeterInput && "justify-between "} items-center`}>
                <label className={labelStyle}  htmlFor="pricePerMeter">
              Цена за метр:
            </label>
            {showPricePerMeterInput ? <div className='flex flex-col gap-1'>
              <input
              className={`${inputStyle} ${
                errors['pricePerMeter'] && 'border-rose-400'
              }`}
              type="text"
              id="pricePerMeter"
              name="pricePerMeter"
              value={formikValues['pricePerMeter']}
              onChange={formik.handleChange}
            /> 
<div className=' cursor-pointer text-xs p-1 border-[1px] mx-auto w-full' 
onClick={() => {
  formik.setFieldValue('pricePerMeter', null)
  setShowPricePerMeterInput(false)}}>Убрать</div>
            </div> : <div className=' cursor-pointer text-xs p-1 border-[1px]' onClick={() => setShowPricePerMeterInput(true)}>Добавить</div>}
            {errors['pricePerMeter'] && (
              <p className={errorTextStyle}>{errors['pricePerMeter']}</p>
            )}
          </div>

          {/* discount */}
          <div className="flex justify-between relative flex-wrap gap-2">
            <label className={labelStyle} htmlFor="discount">
              Скидка:
            </label>
            <input
              className={`${inputStyle} ${
                errors['discount'] && 'border-rose-400'
              }`}
              type="text"
              id="discount"
              name="discount"
              value={formikValues['discount']}
              onChange={formik.handleChange}
            />
            {errors['discount'] && (
              <p className={errorTextStyle}>{errors['discount']}</p>
            )}
          </div>

          {/* description */}
          <div className="flex justify-between relative flex-wrap gap-2">
            <label className={labelStyle} htmlFor="description">
              Описание:
            </label>
            <textarea
              className={` outline-offset-0 outline-0  border-blue outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-24 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px] resize-none' ${
                errors['description'] && 'border-rose-400'
              }`}
              type="textarea"
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
          <div className="flex justify-between relative flex-wrap gap-2">
            <label className={labelStyle} htmlFor="article">
              Артикль:
            </label>
            <input
              className={`${inputStyle} ${
                errors['article'] && 'border-rose-400'
              }`}
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
              className={`w-full`}
              type="file"
              id="mainPhoto"
              name="mainPhoto"
              accept="image/jpeg, image/png"
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('mainPhoto', file);
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
              className="w-full"
              type="file"
              id="extraPhotos"
              name="extraPhotos"
              accept="image/jpeg, image/png"
              multiple // Добавьте этот атрибут
              onChange={(e) => {
                const files = e.target.files;
                formik.setFieldValue('extraPhotos', files);
              }}
            />
            {errors['extraPhotos'] && (
              <p className={errorTextStyle}>{errors['extraPhotos']}</p>
            )}
          </div>
        </div>
        <div className=" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 ">
          {!isLoading ? (
            <button
              type="submit"
              // onClick={onCloseModal}
              disabled={false}
              className={`&quot;Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide&quot`}
            >
              Добавить{' '}
            </button>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </form>
  );
};
