import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { currentUser } from './Redux/auth/auth-operations';
import AdminRoute from './components/Route/AdminRoute';
import PublicRoute from './components/Route/PublicRoute';
import setUpInterceptor from './helpers/axiosInterceptor';

import Home from 'pages/Home/Home';
import MainLoader from './components/Loader/MainLoader/MainLoader';
import PrivateRoute from './components/Route/PrivateRoute';
import { Profile } from './pages/Profile/Profile';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { AdminMain } from './pages/Admin/AdminMain';
import { BlogPost } from './pages/BlogPost/BlogPost';
import ForgotPage from './pages/ForgotPage/ForgotPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';

const Product = lazy(() => import('pages/Product/Product'));
const Category = lazy(() => import('pages/Category/Category'));
const Categories = lazy(() => import('pages/Categories/Categories'));
const About = lazy(() => import('./pages/About/About'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const AllProducts = lazy(() => import('./pages/AllProducts/AllProducts'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage')
);
const ShoppingCart = lazy(() =>
  import('./components/ShoppingCart/ShoppingCart')
);
const Admin = lazy(() => import('./pages/Admin/Admin'));
const AdminProducts = lazy(() => import('./pages/Admin/AdminProducts'));
const AdminOrders = lazy(() => import('./pages/Admin/AdminOrders'));
const AdminReviews = lazy(() => import('./pages/Admin/AdminReviews'));
const AdminUsers = lazy(() => import('./pages/Admin/AdminUsers'));
const AdminPosts = lazy(() => import('./pages/Admin/AdminPosts'));
const VerificationPage = lazy(() =>
  import('./pages/VerificationPage/VerificationPage')
);

function App() {
  const dispatch = useDispatch();
  setUpInterceptor(dispatch);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/all" element={<AllProducts />} />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
            <Route
            path="/forgot-password"
            element={
              <PublicRoute restricted>
                <ForgotPage />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password/:id"
            element={
              <PublicRoute restricted>
                <ResetPasswordPage />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/basket" element={<ShoppingCart />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/categories/:category/:id" element={<Product />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute restricted>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <Suspense fallback={<MainLoader />}>
              <AdminRoute restricted>
                <Admin />
              </AdminRoute>
            </Suspense>
          }
        >
          <Route index element={<AdminMain />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="posts" element={<AdminPosts />} />
          <Route path="reviews" element={<AdminReviews />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
