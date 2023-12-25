const OrderModal = ({ onConfirm }) => {
  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:px-3 md:px-14 rounded-3xl ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Спасибо за заказ!
      </h3>
      <div className="w-[300px] md:w-[400px]">
        <p className="mb-10 text-xl text-gray-800">
          Ваш заказ оформлен, наш менеджер свяжется с Вами.
        </p>
        <button
          onClick={onConfirm}
          className={`" leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white "
                    `}
        >
          Продолжить покупики
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
