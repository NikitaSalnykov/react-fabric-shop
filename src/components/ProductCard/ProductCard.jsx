import { Link } from "react-router-dom";
import { categories } from "../../assets/categories";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeProductSwitcher } from "../TypeProductSwitcher/TypeProductSwitcher"
import { useParams } from 'react-router-dom';
import { deleteFavorite, getFavorite, setFavorite } from "../../Redux/favorites/favoriteSlice";
import Svg from "../Svg/Svg";
import { Price } from "../../pages/Price/Price";

const categoryURL = (category) => {
  const result = categories.find((el) => el.name === category);
  if (result) {
    return result.category;
  } else {
    console.log(`Category not found for ${category}`);
  }
  }



export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorite);
  const [favoritesStyle, setFavoritesStyle] = useState(
  useSelector(getFavorite) || []
);
  const { category } = useParams();

  const handleFavorite = (product) => {
    if (favorites.some((item) => item._id === product._id)) {
      dispatch(deleteFavorite(product._id));
      setFavoritesStyle(favoritesStyle.filter((el) => el._id !== product._id));
    } else {
      dispatch(setFavorite(product));
      setFavoritesStyle([...favoritesStyle, product]);
    }
  };

  return (
    <div className="relative p-[8px] md:p-4 rounded-xl shadow-md flex flex-col justify-between" key={product._id}>
<Link
                to={`/categories/${category || categoryURL(product.category)}/${
                  product._id
                }`}
                className="group"
              >
                <div className="shadow-md h-[200px] md:h-[250px] md:h-300px aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.mainPhoto}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
                <p className=" capitalize text-sm text-gray-700">Цвет: {product.color}</p>
                <p className="text-sm font-medium text-gray-900">
                    {product.category}
                </p>
                </Link>
                <div className="mt-4">
{product.category !== "Фурнитура" ? <TypeProductSwitcher product={product}/> :
    <Price price={product.price} discount={product.discount} orientation='row' size='small'/>
  }                </div>
                              {product.discount > 0 && <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-red flex justify-center items-center cursor-pointer `}>
                             <p className='flex justify-center items-center gap-[1px] text-white font-semibold'><span className=' text-[10px]'>-</span>{product.discount}<span className=' text-[10px]'>%</span></p>
                              </div>}
                              <div onClick={() => handleFavorite(product)} className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex justify-center items-center  ${favoritesStyle.some((item) => item._id === product._id) ? " opacity-80" : "opacity-40"} hover:opacity-80 cursor-pointer `}>
                              <Svg id={'icon-favorite-product'} size={22} 
                               fill={`${
                                favoritesStyle.some((item) => item._id === product._id)
                                  ? 'red'
                                  : 'gray'
                              }`}
                              stroke={`${
                                favoritesStyle.some((item) => item._id === product._id)
                                  ? 'red'
                                  : 'gray'
                              }`}/>
                              </div>
                              
</div>
  )
}
