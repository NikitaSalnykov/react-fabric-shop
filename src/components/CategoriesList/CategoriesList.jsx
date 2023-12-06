import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesList = ({title}) => {
  const products = [
    {
      id: 1,
      name: 'Атлас',
      price: '$10',
      category: 'atlas',
      imageSrc: 'https://content1.rozetka.com.ua/goods/images/big/314631313.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Фатин',
      price: '$15',
      category: 'fatin',
      imageSrc: 'https://shop-cdn1-2.vigbo.tech/shops/168560//products/21299143/images/preview-1d07a695738b539d638e3338acd2d3b3.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      price: '$15',
      category: 'fatin',
      imageSrc: 'https://ideia.ua/storage/products/images/big/19417.jpg?v=1669082344',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Велюр',
      price: '$35',
      category: 'velur',
      imageSrc: 'https://ideia.ua/storage/products/images/big/20142.jpg?v=1666865166',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  


  return (
    <div className="">
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl ">{title}</h2>

      <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link to={`/categories/${product.category}`} key={product.id} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75 sm:h-[280px]"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CategoriesList