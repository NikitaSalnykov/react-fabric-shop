import { Link, Navigate, useParams } from 'react-router-dom';
import { categories } from '../../assets/categories';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../../components/ProductsList/ProductsList';
import ErrorPage from '../ErrorPage/ErrorPage';

const Category = () => {
  const { category } = useParams();
  const rightCategory = categories.some((el) => el.category === category);

  return (
    <>
      {rightCategory ? (
        <div className="container">
          <Breadcrumbs />
          <ProductList title="Весь католог:" />
        </div>
      ) : (
        <ErrorPage
          text={`Категория "${category}" не найдена`}
          buttonName={'Все категории'}
          link={'/categories'}
        />
      )}
    </>
  );
};

export default Category;
