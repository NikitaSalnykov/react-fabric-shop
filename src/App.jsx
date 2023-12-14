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

function App() {
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
          <Route path="/basket" element={<ShoppingCart />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/categories/:category/:id" element={<Product />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </div>
  );
}
export default App;
