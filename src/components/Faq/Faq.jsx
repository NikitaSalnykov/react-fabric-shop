import Svg from '../Svg/Svg';

const Faq = () => {
  return (
    <div className="container">
      <div className=" py-8">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
          Наши услуги
        </h4>
        <p className="text-center text-gray-600 text-sm mt-2">
        Важная информация для наших клиентов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-main-fabric'} fill={'black'} size={32}></Svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">Продукция</h3>
              <p className="text-gray-600 my-2">
              Наши товары отличаются высоким качеством, которое гарантируется заводом-производителем. Мы представляем только продукцию, прошедшую строгий контроль качества, покупая у нас, вы можете быть уверены в надежности и долговечности каждого изделия
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-delivery'} size={38}></Svg>
            </div>
            <div id="delivery">
              <h3 className="text-xl font-bold text-gray-700">Доставка</h3>
              <p className="text-gray-600 my-2">
Мы предоставляем доставку любым удобным для вас способом. Независимо от вашего местоположения или предпочтений, мы готовы организовать доставку так, чтобы вы получили ваш заказ без проблем и в удобное для вас время
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-boxes'} stroke={"black"} fill={'transparent'} size={38}></Svg>
            </div>
            <div id="pickup">
              <h3 className="text-xl font-bold text-gray-700">
                Самовывоз с нашего склада
              </h3>
              <p className="text-gray-600 my-2">
              У нас также доступен самовывоз с нашего склада. Мы приглашаем вас лично посетить нас и ознакомиться с нашим ассортиментом товаров. У нас вы можете не только посмотреть на товары, но и получить консультацию от наших специалистов, чтобы сделать правильный выбор.
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <Svg id={'icon-wholesale'} stroke={"white"} fill={'white'}  size={38}></Svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700">
                Покупайте оптом и в розницу
              </h3>
              <p className="text-gray-600 my-2">             
Покупайте у нас оптом или в розницу! Мы предлагаем как рулонные товары, так и продажу по метражу, чтобы удовлетворить любые потребности. Кроме того, для оптовых покупателей мы предоставляем специальные скидки, делая наши продукты еще более доступными и выгодными.
              </p>
            </div>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="black"
                viewBox="0 0 24 24"
                stroke="white"
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
                
У нас всегда есть специальные акционные предложения для наших постоянных клиентов! Мы ценим ваше доверие и предлагаем вам приятные скидки и подарки в благодарность за вашу лояльность!
              </p>
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
            <div id="returns">
              <h3 className="text-xl font-bold text-gray-700">
                Возврат и гарантия качества
              </h3>
              <p className="text-gray-600 my-2">
              Мы гарантируем качество наших товаров и предоставляем вам возможность возврата в случае необходимости. Если вы не удовлетворены приобретенным товаром или возникли проблемы с качеством, обратитесь к нам, и мы с удовольствием поможем вам решить этот вопрос. Ваши желания - наш приоритет.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
