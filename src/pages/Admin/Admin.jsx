import { Suspense, useState } from 'react';

import AdminSideMenu from './AdminSideMenu';
import AdminNavigation from './AdminNavigation';
import { Outlet } from 'react-router-dom';
import { AdminMain } from './AdminMain';

const Admin = () => {
  const [isDashboardOpen, setDashboardOpen] = useState(false);

  const onToggleDashboard = () => {
    setDashboardOpen(!isDashboardOpen);
    console.log(isDashboardOpen);
  };

  return (
    <div className="container min-h-screen">
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
