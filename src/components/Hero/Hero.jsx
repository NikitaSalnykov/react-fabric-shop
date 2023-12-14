import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative isolate px-6 py-14 lg:px-8">
    <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:py-8">
      <div className="hidden lg:mb-8 lg:flex lg:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Мы гарантируем сервис и высокое качество{' '}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Подробнее <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Огромный выбор атластных тканей!
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Материалы высокого качества, приятные цены и широкий ассортимент цветов, для наших клиентов отпускаем от 1 метра!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Перейти к атласам
          </a>
          <Link to={'categories/'} className="text-sm font-semibold leading-6 text-gray-900">
            Все категории <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero