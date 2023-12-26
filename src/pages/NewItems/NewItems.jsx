import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Filter } from '../../components/Filter/Filter';
import NewProductList from '../../components/NewProductsList/NewProductsList';

const NewItems = () => {
  return (
    <div className="container">
      <Breadcrumbs />

      <div className="">
       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
          Новые поступления:
        </h2>
        <Filter/>
       </div>
        <NewProductList />
      </div>
    </div>
  );
};

export default NewItems;
