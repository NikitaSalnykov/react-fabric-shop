import Svg from '../Svg/Svg';

const Faq = () => {
  return (
    <div className="container">
      <div className=" py-8">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
          Наши услуги
        </h4>
        <p className="text-center text-gray-600 text-sm mt-2">
          Here are some of the frequently asked questions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-fabric-about '} fill={'black'} size={32}></Svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Продукция</h3>
              <p className="text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-delivery'} size={38}></Svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Доставка</h3>
              <p className="text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-boxes'} size={38}></Svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">
                Самовывоз с нашего склада
              </h3>
              <p className="text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-wholesale'} size={38}></Svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">
                Покупайте оптом и в розницу
              </h3>
              <p className="text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">
                Акционные предложения постоянным покупателям
              </h3>
              <p className="text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">
                Гарантия качества и клиентоориентированность
              </h3>
              <p className="text-gray-600 my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                dignissimos. Neque eos, dignissimos provident reiciendis debitis
                repudiandae commodi perferendis et itaque, similique fugiat
                cumque impedit iusto vitae dolorum. Nostrum, fugit!
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                title="Read More"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
