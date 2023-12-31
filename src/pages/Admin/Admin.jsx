import { Suspense, useState } from 'react';

import AdminSideMenu from './AdminSideMenu';
import AdminNavigation from './AdminNavigation';
import AdminProducts from './AdminProducts';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  const [isDashboardOpen, setDashboardOpen] = useState(false);

  const onToggleDashboard = () => {
    setDashboardOpen(!isDashboardOpen);
    console.log(isDashboardOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
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
