import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../../Redux/cart/cartSlice';
import Svg from '../Svg/Svg';

const ShoppingCartCard = ({ product }) => {
  const [count, setCount] = useState(product.count);
  const dispatch = useDispatch();

  const handleDeleteFromCart = (e) => {
    e.preventDefault(dispatch(deleteCart(product.id)));
  };

  return (
    <div className="w-full h-auto py-8 px-3 md:px-5 border-[1px] border-lightgray rounded-[20px]  flex flex-col md:flex-row relative">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex gap-4 items-center">
          <div className="w-[50px] h-[50px] rounded-[50%] md:w-[200px] md:h-[200px] overflow-hidden md:rounded-xl">
            <img
              src={product.product.mainPhoto}
              alt="Black Leather Bag"
              className="w-[200%] h-auto"
            />
          </div>
          <div
            className="gap-[14px] md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-around
"
          >
            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
              Код товара:{' '}
              <span className=" font-bold">{product.product.article}</span>
            </p>
            <div className="flex items-center justify-between w-full pt-1">
              <p className="text-base font-black leading-none text-gray-800 ">
                {product.product.name}
              </p>
            </div>
            <p className="text-base text-gray-900 text-xs">
              {product.product.description.split('\r\n').map((line, index) => (
                <div key={index}>
                  {line}
                  <br />
                </div>
              ))}
            </p>
            <div className="flex items-center justify-between absolute top-4 right-4">
              <div className="flex itemms-center gap-4">
                <button className="">
                  <Svg id={'icon-favorite'} size={22} />
                </button>
                <button className="" onClick={handleDeleteFromCart}>
                  <Svg id={'icon-cross'} size={22} stroke={'black'} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-end items-center gap-8 lg:flex-col lg:items-center lg:justify-between">
          <div className="flex flex-col  gap-4 justify-end">
            <div className="custom-number-input h-10 w-32 items-center">
              <div className="flex flex-row h-10 w-full rounded-lg  bg-transparent">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (count === 1) return;
                    setCount(count - 1);
                    dispatch(
                      updateCart({
                        id: product.id,
                        product: product.product,
                        count,
                      })
                    );
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
                    dispatch(
                      updateCart({
                        id: product.id,
                        product: product.product,
                        count,
                      })
                    );
                  }}
                  data-action="increment"
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>

          <p className="text-xl font-black leading-none text-gray-800">
            {Number(product.product.price) * count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
