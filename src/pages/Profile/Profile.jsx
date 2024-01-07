import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import UserInfo from './UserInfo';
import { UserOrders } from './UserOrders';

export const Profile = () => {
  return (
    <div className="container min-h-screen">
      <Breadcrumbs name={'Профиль'} />
      <UserInfo />
      <UserOrders />
    </div>
  );
};
