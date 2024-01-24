import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const Categories = () => {
  

  return (
    <div className="container">
      <Breadcrumbs />
      <CategoriesList title="Все категории:" />
    </div>
  );
};

export default Categories;
