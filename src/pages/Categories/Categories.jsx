import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const Categories = () => {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Коллекции</h2>
        <div className="flex gap-2 md:gap-5">
          <div className=" min-w-[120px] w-full h-[412px] md:h-[420px] overflow-hidden rounded-[15px] md:rounded-[30px] hover:opacity-75 cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://static.tildacdn.com/tild3038-6262-4439-a561-633262613963/milan28.jpg"
              alt="Colections"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-5 md:w-[420px]">
            <div className="w-[full] h-[200px] overflow-hidden rounded-xl hover:opacity-75 cursor-pointer">
              <img
                className="w-full h-full object-cover "
                src="https://cdn10.bostonmagazine.com/wp-content/uploads/2015/05/shutterstock_fabrics.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-[200px] overflow-hidden rounded-xl hover:opacity-75 cursor-pointer">
              <img
                className="w-full h-full object-cover "
                src="https://bellatory.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk4MTc0NjAyNDc0NTYyNzUw/dress-fabric.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <CategoriesList title="Все категории:" />
    </div>
  );
};

export default Categories;
