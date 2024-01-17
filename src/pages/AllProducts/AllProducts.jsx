import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Filter } from '../../components/Filter/Filter';
import AllProductList from '../../components/AllProductsList/AllProductsList';

const AllProducts = () => {
  return (
    <div className="container">
      <Breadcrumbs />

      <div className="">
       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
          Весь ассортимент:
        </h2>
        <Filter nameFilter={true} filterColor={true} filterCategory={true} filterPrice={true} filterNew={true} filterSale={true}/>
       </div>
        <AllProductList />
      </div>
    </div>
  );
};

export default AllProducts;
