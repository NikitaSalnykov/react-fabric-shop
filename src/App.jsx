import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Product from 'pages/Product/Product';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Category from 'pages/Category/Category';
import Categories from 'pages/Categories/Categories';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import NewItems from './pages/NewItems/NewItems';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegisterPage/RegisterPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Admin from './pages/Admin/Admin';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminUsers from './pages/Admin/AdminUsers';
import PrivateRoute from './components/Route/PrivateRoute';
import { VerificationPage } from './pages/VerificationPage/VerificationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from './Redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

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
          <Route path="/new" element={<NewItems />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/basket" element={<ShoppingCart />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/categories/:category/:id" element={<Product />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
