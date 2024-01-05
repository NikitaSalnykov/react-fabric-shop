import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../../Redux/orders/ordersOperation';

const DeleteOrder = ({ onCloseModal, order }) => {
  const dispatch = useDispatch();
  console.log(order);

  const handleDelete = () => {
    dispatch(deleteOrder(order._id));
    onCloseModal();
  };

  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:px-3 md:px-14 rounded-3xl ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Удалить Заказ №{order.order.orderNumber}?
      </h3>
      <div className="flex gap-4">
        <button
          className={`"Frame36 hover:blue-gradient hover:text-white smOnly:w-64 smOnly:h-10 w-32 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide"`}
          onClick={handleDelete}
        >
          Подтвердить
        </button>
        <button
          className={`"Frame36 hover:blue-gradient hover:text-white smOnly:w-64 smOnly:h-10 w-32 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope'] tracking-wide"`}
          onClick={onCloseModal}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default DeleteOrder;
