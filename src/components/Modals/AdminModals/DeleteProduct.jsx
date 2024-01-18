import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../Redux/products/productsOperation';

const DeleteProduct = ({ onCloseModal, product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product._id));
    onCloseModal();
  };

  return (
    <div className="md:max-w-2xl text-center p-6 md:p-12 rounded-3xl  ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Удалить {product.name} ?
      </h3>
      <div className="flex flex-col  md:flex-row gap-4">
        <button
          className={`"Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope']tracking-wide"`}
          onClick={handleDelete}
        >
          Подтвердить
        </button>
        <button
          className={`"Frame36 hover:blue-gradient hover:text-white smOnly:h-10 h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex  text-blue text-base font-bold font-['Manrope']tracking-wide"`}
          onClick={onCloseModal}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
