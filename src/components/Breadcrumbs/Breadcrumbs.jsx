import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({name}) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const path = url.pathname;
    const pathSegments = path.split('/');
    const filtered = pathSegments.filter(el => el !== '')
    setArr(filtered);
  }, []);


  console.log(arr);

  function createNavLink(el) {
    switch (el) {
      case "atlas":
        return <Link to={'/categories/atlas'} className='p-[2px] md:p-1'>Атлас</Link>;
      case "categories":
        return <Link to={'/categories'} className='p-[2px] md:p-1'>Категории</Link>;
        case "fatin":
          return <Link to={'/categories/fatin'} className='p-[2px] md:p-1'>Фатин</Link>;
      default:
        return null;
    }
  }

  return (
    <div className='text-xs flex gap-1 w-full md:text-sm py-6'>
      <Link to={'/'} className='p-[2px] md:p-1'>Главная</Link>
      {arr.map((el, index) => {
        if(!el) return
        return (
        <React.Fragment key={index}>
           {createNavLink(el)}
    {index < arr.length - 1 ? <div className='p-[2px] md:p-1'>→</div> : null}
        </React.Fragment>
      )
      })}
      {name &&       
      <>
      <Link className='p-[2px] md:p-1'>{name}</Link>
      </>
}
    </div>
  );
};

export default Breadcrumbs;
