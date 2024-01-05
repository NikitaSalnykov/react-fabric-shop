import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ name }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const path = url.pathname;
    const pathSegments = path.split('/');
    const filtered = pathSegments.filter((el) => el !== '');
    setArr(filtered);
  }, []);

  function createNavLink(el) {
    switch (el) {
      case 'atlas':
        return (
          <Link to={'/categories/atlas'} className="p-[2px] md:p-1">
            Атлас
          </Link>
        );
      case 'fatin':
        return (
          <Link to={'/categories/fatin'} className="p-[2px] md:p-1">
            Фатин
          </Link>
        );
      case 'podkladka':
        return (
          <Link to={'/categories/podkladka'} className="p-[2px] md:p-1">
            Подкладочная ткань
          </Link>
        );
      case 'organza':
        return (
          <Link to={'/categories/organza'} className="p-[2px] md:p-1">
            Органза
          </Link>
        );
      case 'setka':
        return (
          <Link to={'/categories/setka'} className="p-[2px] md:p-1">
            Сетка
          </Link>
        );
      case 'glitter':
        return (
          <Link to={'/categories/glitter'} className="p-[2px] md:p-1">
            Глиттер
          </Link>
        );
      case 'guipure':
        return (
          <Link to={'/categories/guipure'} className="p-[2px] md:p-1">
            Гипюры и кружева
          </Link>
        );
      case 'categories':
        return (
          <Link to={'/categories'} className="p-[2px] md:p-1">
            Категории
          </Link>
        );
      case 'furnitura':
        return (
          <Link to={'/categories/furnitura'} className="p-[2px] md:p-1">
            Фурнитура
          </Link>
        );
      case 'blog':
        return (
          <Link to={'/blog'} className="p-[2px] md:p-1">
            Блог
          </Link>
        );
      case 'about':
        return (
          <Link to={'/about'} className="p-[2px] md:p-1">
            О нас
          </Link>
        );
      case 'new':
        return (
          <Link to={'/new'} className="p-[2px] md:p-1">
            Новинки
          </Link>
        );
      case 'admin':
        return (
          <Link to={'/admin'} className="p-[2px] md:p-1">
            Админ-панель
          </Link>
        );
      case 'products':
        return (
          <Link to={'/admin/products'} className="p-[2px] md:p-1">
            Товары
          </Link>
        );
      case 'orders':
        return (
          <Link to={'/admin/orders'} className="p-[2px] md:p-1">
            Заказы
          </Link>
        );

      default:
        return null;
    }
  }

  return (
    <div className="text-xs flex flex-wrap gap-1 w-full md:text-sm py-6">
      <Link to={'/'} className="p-[2px] md:p-1">
        Главная
      </Link>
      {arr.map((el, index) => {
        if (!el) return;
        return (
          <React.Fragment key={index}>
            {createNavLink(el)}
            {index < arr.length - 1 ? (
              <div className="p-[2px] md:p-1">→</div>
            ) : null}
          </React.Fragment>
        );
      })}
      {name && (
        <>
          <Link className="p-[2px] md:p-1">{name}</Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
