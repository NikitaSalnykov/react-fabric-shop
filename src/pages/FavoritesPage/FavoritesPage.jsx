import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import { Filter } from '../../components/Filter/Filter';

const FavoritesPage = () => {
  return (
    <div className="container">
      <Breadcrumbs name={'Избранные'}/>

      <div className="">
       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
       Избранные:
        </h2>
       </div>
<FavoritesList/>
      </div>
    </div>
  );
};

export default FavoritesPage;
