import React from 'react';
import { useDispatch } from 'react-redux';
import Svg from '../Svg/Svg';
import { setFilterName } from '../../Redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ currentTarget }) => {
    dispatch(setFilterName(currentTarget.value));
  };


  return (
        <div className='flex gap-1'>
      <label style={{ marginRight: '14px' }} htmlFor="filter">
      <Svg id={'icon-search'} size={22} />
      </label>
      <input
        id="filter"
        type="text"
        name="input"
        required
        onChange={handleFilter}
        variant="standard"
        className='border-b-2 px-2 text-gray-800 border-gray-600 hover:outline-none focus:outline-none'
      />
    </div>
  );
};
