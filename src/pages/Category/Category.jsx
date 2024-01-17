import { Link, Navigate, useParams } from 'react-router-dom';
import { categories } from '../../assets/categories';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../../components/ProductsList/ProductsList';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Filter } from '../../components/Filter/Filter';

const Category = () => {
  const { category } = useParams();
  const rightCategory = categories.some((el) => el.category === category);

  return (
    <>
      {rightCategory ? (
        <div className="container">
          <Breadcrumbs />
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
          Весь католог:
        </h2>
          <Filter nameFilter={true} filterColor={true} filterPrice={true} filterNew={true} filterSale={true}/>
          </div>
          <ProductList/>
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
