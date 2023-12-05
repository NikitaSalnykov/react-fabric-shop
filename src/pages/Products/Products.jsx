import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

  
const callouts = [
  {
    name: 'Атлас',
    description: 'Большой выбор цветов',
    imageSrc: 'https://content1.rozetka.com.ua/goods/images/big/314631313.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/products/atlas',
  },
  {
    name: 'Фатин',
    description: 'Высокое качество',
    imageSrc: 'https://shop-cdn1-2.vigbo.tech/shops/168560//products/21299143/images/preview-1d07a695738b539d638e3338acd2d3b3.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/products/fatin',
  },
  {
    name: 'Велюр',
    description: 'Лучший выбор',
    imageSrc: 'https://ideia.ua/storage/products/images/big/19417.jpg?v=1669082344',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products/fatin',
  },
]

return (
  <div className="container">
    <div className="">
    <h2 className="text-2xl font-bold text-gray-900 mb-5">Коллекции</h2>    
    <div className='flex gap-2 md:gap-5'>
      <div className=" w-full h-[412px] md:h-[420px] overflow-hidden rounded-[15px] md:rounded-[30px] hover:opacity-75 cursor-pointer">
        <img className='w-full h-full object-cover' src="https://static.tildacdn.com/tild3038-6262-4439-a561-633262613963/milan28.jpg" alt="Colections" />
      </div>
<div className="flex flex-col gap-3 md:gap-5 md:w-[420px]">
<div className="w-[full] h-[200px] overflow-hidden rounded-xl hover:opacity-75 cursor-pointer">
        <img className='w-full h-full object-cover ' src="https://cdn10.bostonmagazine.com/wp-content/uploads/2015/05/shutterstock_fabrics.jpg" alt="" />
      </div>
      <div className="w-full h-[200px] overflow-hidden rounded-xl hover:opacity-75 cursor-pointer">
        <img className='w-full h-full object-cover ' src="https://bellatory.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk4MTc0NjAyNDc0NTYyNzUw/dress-fabric.jpg" alt="" />
      </div>
</div>
    </div>
    </div>
    <div className="">
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
        <h2 className="text-2xl font-bold text-gray-900">Ткани по категориям</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
}

export default Products