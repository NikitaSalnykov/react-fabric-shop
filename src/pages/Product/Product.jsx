import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/products/productsOperation';
import {
  getIsLoadingProducts,
  getProducts,
} from '../../Redux/products/productsSelectors';
import { SwiperComponent } from '../../components/Swiper/Swiper';
import { deleteCart, setCart } from '../../Redux/cart/cartSlice';
import { getCart } from '../../Redux/cart/cartSelectors';
import SkeletonProduct from '../../components/Loader/SkeletonProduct';

const Product = () => {
  const { id } = useParams();
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const getUserCart = useSelector(getCart);

  console.log(category);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((el) => el._id === id);

  const anotherColors = products
    .filter((el) => el._id !== product._id)
    .filter((el) => el.name === product.name)
    .filter((el) => el.category === product.category)
    .filter((el) => el.color !== product.color);
  console.log(anotherColors);

  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      id: product._id,
      count,
      product,
    };
    console.log(order);
    dispatch(setCart(order));
  };

  const handleDeleteFromCart = (e) => {
    e.preventDefault(dispatch(deleteCart(product._id)));
  };

  console.log(getUserCart);

  return (
    <div className="container">
      {!isLoading && product && <Breadcrumbs name={product.name} />}
      {!isLoading && product ? (
        <div className="pt-6">
          {/* Image gallery */}
          <div className="">
            <SwiperComponent
              images={[product.mainPhoto, ...product.extraPhotos]}
              id={product._id}
              name={product.name}
            />
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <h3 className="text-sm font-medium text-gray-900  mb-4">
                Стоимость:
              </h3>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>

              <form className="mt-10">
                {/* Colors */}
                {anotherColors && anotherColors.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900  mb-4">
                      Расцветки и варианты:
                    </h3>
                    <div className="flex flex-wrap gap-4 ">
                      {anotherColors ? (
                        anotherColors.map((el) => (
                          <Link
                            key={el._id}
                            to={`/categories/${category}/${el._id}`}
                            className="w-14 h-14 flex justify-center items-center overflow-hidden"
                          >
                            <img
                              className="w-[50px] h-[50px]  rounded-[90px]  object-cover"
                              src={el.mainPhoto}
                              alt={el.name}
                            />
                          </Link>
                        ))
                      ) : (
                        <div>Loading</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Количество */}
                {getUserCart &&
                getUserCart.some((el) => el.id === product._id) ? (
                  <p className="mt-10">
                    <span className="font-bold ">{product.name} </span> уже в
                    Вашей корзине
                  </p>
                ) : (
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Количество
                      </h3>
                    </div>

                    <div className="custom-number-input h-10 w-32 pt-2">
                      <label
                        htmlFor="custom-input-number"
                        className="w-full text-gray-700 text-sm font-semibold"
                      ></label>
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (count === 1) return;
                            setCount(count - 1);
                          }}
                          data-action="decrement"
                          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <div
                          type="number"
                          className="flex justify-center items-center pointer-events-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        >
                          {count}
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setCount(count + 1);
                          }}
                          data-action="increment"
                          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {getUserCart &&
                getUserCart.some((el) => el.id === product._id) ? (
                  <div>
                    <button
                      onClick={handleDeleteFromCart}
                      className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-red px-8 py-3 text-base font-medium text-white hover:bg-red focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Убрать из корзины
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Добавить в корзину
                  </button>
                )}
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="text-sm font-medium text-gray-900  mb-4">
                  Описание:
                </h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900 ">
                    {product.description.split('\r\n').map((line, index) => (
                      <div key={index}>
                        {line}
                        <br />
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <SkeletonProduct />
        </div>
      )}
    </div>
  );
};

export default Product;
