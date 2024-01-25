import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Svg from '../Svg/Svg';
import { setFilterCategory, setFilterColor, setFilterName, setFilterNew, setFilterPrice, setFilterSale } from '../../Redux/filter/filterSlice';
import { categories } from '../../assets/categories';
import { fetchProducts } from '../../Redux/products/productsOperation';
import { getProducts } from '../../Redux/products/productsSelectors';

export const Filter = ({nameFilter=false, filterColor=false, filterCategory=false, filterPrice=false, filterNew=false, filterSale=false, value}) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts)
  const [isCheckedSale, setCheckedSale] = useState(value === "sale" ? true : false)

  useEffect(() => {
    dispatch(fetchProducts())
    
    dispatch(setFilterSale(isCheckedSale));

    if(value === "main") {
      setCheckedSale(false)
      dispatch(setFilterSale(isCheckedSale))
      dispatch(setFilterCategory("Основные ткани"))
    };
    if(value === "accessories") {
      dispatch(setFilterCategory("Основные ткани"))
      setCheckedSale(false)
      dispatch(setFilterCategory("Аксессуары"))
    };
  }, [dispatch, value])
  
  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilterName(currentTarget.value));
  };

  const handleFilterColor = ({ currentTarget }) => {
    dispatch(setFilterColor(currentTarget.value));
  };

  const handleFilterCategory = ({ currentTarget }) => {
    dispatch(setFilterCategory(currentTarget.value));
  };

  const handleFilterPrice = ({ currentTarget }) => {
    console.log(currentTarget.value);
    dispatch(setFilterPrice(currentTarget.value));
  };

  const handleFilterNew = (e) => {
    const isChecked = e.currentTarget.checked;
    dispatch(setFilterNew(isChecked));
  };

  const handleFilterSale = (e) => {
    const isChecked = e.currentTarget.checked;
    setCheckedSale(!isCheckedSale)
    dispatch(setFilterSale(!isCheckedSale));
  };

  const filteredColors = () => {
    const colors = [];
    products.map(el => colors.push(el.color));
    const uniqueColors = colors.filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });
    return uniqueColors;
  };
  
  return (
<div className="flex flex-col gap-4">
<div className="flex gap-4 flex-wrap">
{nameFilter && <div className='flex gap-1'>
      <label className='flex justify-center items-center' style={{ marginRight: '14px' }} htmlFor="filter">
      <Svg id={'icon-search'} size={22} />
      </label>
      <input
        id="filter"
        type="text"
        name="input"
        required
        onChange={handleFilter}
        variant="standard"
        className='bg-transparent border-b-2 px-2 text-gray-800 border-gray-600 hover:outline-none focus:outline-none w-full'
      />
    </div>}
      <div className="flex gap-4">
      {filterColor && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterColor">
       Цвет
       </label>
       <select id="filterColor" onChange={handleFilterColor}
 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
         <option selected>Все цвета</option>
         {products && filteredColors().map(el => <option>{el}</option>)}
     </select>
      </div>}
      {filterCategory && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterCategory">
       Категория
       </label>
       <select id="filterCategory" onChange={handleFilterCategory} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
         <option selected={true}>Все категории</option>
         <option selected={value === "main" ? true : false}>Основные ткани</option>
         <option selected={value === "accessories" ? true : false}>Аксессуары</option>
         {categories.map(el => <option>{el.name}</option>
)}
     </select>
      </div>}
      {filterPrice && <div className="flex justify-center items-center">
      <label className='sr-only' style={{ marginRight: '14px' }} htmlFor="filterPrice">
       Цена
       </label>
       <select id="filterPrice" onChange={handleFilterPrice} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
       >
         <option value="10000000" selected>Все цены</option>
         <option value="100">До 100</option>
         <option value="200">До 200</option>
         <option value="300">До 300</option>
         <option value="1000">До 1000</option>
         <option value="2500">До 2500</option>
         <option value="100000">более 2500</option>
     </select>
      </div>}
      </div>
      
</div>
<div className="flex items-start ml-auto gap-6">
                {filterSale && <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="salesProducts"
                      type="checkbox"
                      checked={isCheckedSale}
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                      onChange={handleFilterSale}
                    />
                  </div>
                  <div className="text-sm ml-1">
                    <label
                      htmlFor="salesProducts"
                      className="font-medium text-gray-900 "
                    >
                      Со скидкой
                    </label>
                  </div>
                </div>}
                {filterNew && <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newProducts"
                      type="checkbox"
                      className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                      onChange={handleFilterNew}
                    />
                  </div>
                  <div className="text-sm ml-1">
                    <label
                      htmlFor="newProducts"
                      className="font-medium text-gray-900 "
                    >
                      Новые поступления
                    </label>
                  </div>
                </div>}
              </div>
</div>
  );
};
