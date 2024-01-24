import { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AdminSideMenu from './AdminSideMenu';
import AdminNavigation from './AdminNavigation';
import { Outlet, useLocation  } from 'react-router-dom';
import { AdminMain } from './AdminMain';
import { setFilterName } from '../../Redux/filter/filterSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const {pathname: currentPath } = useLocation();

  useEffect(() => {
    dispatch(setFilterName(''));
  }, [currentPath ])
  

  const onToggleDashboard = () => {
    setDashboardOpen(!isDashboardOpen);
    console.log(isDashboardOpen);
  };

  return (
    <div className="smOnly:container min-h-screen">
      <AdminSideMenu
        isDashboardOpen={isDashboardOpen}
        onToggleDashboard={onToggleDashboard}
      />
      <div className="p-4 lg:ml-80">
        <AdminNavigation onToggleDashboard={onToggleDashboard} />

        <Suspense>
          <Outlet />
        </Suspense>
        <div className="text-blue-gray-600"></div>
      </div>
    </div>
  );
};

export default Admin;
