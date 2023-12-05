import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import SecondPage from 'pages/SecondPage/SecondPage';
import HalfPage from 'pages/HalfPage/HalfPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Category from 'pages/Category/Category'
import Products from 'pages/Products/Products'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/first" element={<Home />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path="/products" element={<Products />}/>
            <Route path="/products/:category" element={<Category />}>
              <Route path=":id" element={<HalfPage />} />
            </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
