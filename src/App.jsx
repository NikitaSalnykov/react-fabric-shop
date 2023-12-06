import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import SecondPage from 'pages/SecondPage/SecondPage';
import Product from 'pages/Product/Product';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Category from 'pages/Category/Category'
import Categories from 'pages/Categories/Categories'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/second" element={<SecondPage />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/categories/:category" element={<Category />}/>
          <Route path="/categories/:category/:id" element={<Product />} />


          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
