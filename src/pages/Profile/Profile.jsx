import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import UserInfo from './UserInfo';
import { UserOrders } from './UserOrders';

export const Profile = () => {
  return (
    <div className="container min-h-[screen]">
      <Breadcrumbs name={'Профиль'} />
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-8">
          Личный Профиль
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <UserInfo />
        <UserOrders />
      </div>
    </div>
  );
};
