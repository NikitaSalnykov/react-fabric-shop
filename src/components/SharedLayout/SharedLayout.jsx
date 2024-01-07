import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import MainLoader from '../Loader/MainLoader/MainLoader';

const SharedLayout = () => {
  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();

  useEffect(() => {
    handleNavigate();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Background />
      <Suspense fallback={<MainLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
