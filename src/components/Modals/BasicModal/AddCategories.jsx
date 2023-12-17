import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';

const errorTextStyle =
  'pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]';
// const hoverStyle =
//   'transition duration-200 ease-in-out cursor-pointer hover:opaarticle-80';
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ";
const inputStyle =
  " outline-offset-0 outline-0  border border-blue outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]";

const AddCategories = ({ onCloseModal }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      photo: null,
    },

    validateOnChange: false,
    validateOnBlur: true,
    // validationSchema: ProductSchema,

    onSubmit: ({ name }) => {
      onCloseModal();
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:px-3 md:px-14 rounded-3xl ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Добавить категорию
      </h3>
      <div className="">
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

              <div className="flex justify-between relative">
                <label className={labelStyle} htmlFor="name">
                  Название:
                </label>
                <input
                  className={`${inputStyle} ${
                    errors['name'] && 'border-rose-400'
                  }`}
                  type="text"
                  id="name"
                  name="name"
                  value={formikValues['name']}
                  // onChange={formik.handleChange}
                />
                {errors['name'] && (
                  <p className={errorTextStyle}>{errors['name']}</p>
                )}
              </div>

              {/* photo */}
              <div className="flex flex-col justify-between relative items-center gap-2">
                <label className={labelStyle} htmlFor="mainPhoto">
                  Главная фотка:
                </label>
                <input
                  className={``}
                  type="file"
                  id="mainPhoto"
                  name="mainPhoto"
                  accept="image/jpeg, image/png"
                  // onChange={}
                />
                {errors['mainPhoto'] && (
                  <p className={errorTextStyle}>{errors['mainPhoto']}</p>
                )}
              </div>
            </div>
            <div className=" smOnly:flex smOnly:flex-col smOnly:items-center smOnly:gap-2 } mt-12 ">
              <button
                type="submit"
                // onClick={onCloseModal}
                className="Frame36 hover:blue-gradient hover:text-white smOnly:w-64 smOnly:h-10 w-32 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide"
              >
                Добавить{' '}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategories;
