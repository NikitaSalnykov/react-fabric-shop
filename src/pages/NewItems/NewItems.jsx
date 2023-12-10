import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../../components/ProductsList/ProductsList';

const NewItems = () => {
  return (
    <div className="container">
      <Breadcrumbs />

      <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
          Новые поступления:
        </h2>
        <ProductList />
      </div>
    </div>
  );
};

export default NewItems;
