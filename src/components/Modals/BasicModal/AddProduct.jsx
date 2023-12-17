import { AddProductForm } from './AddProductForm';

const AddProduct = ({ onCloseModal }) => {
  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:px-3 md:px-14 rounded-3xl ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Добавить товар
      </h3>
      <div className="">
        <AddProductForm onCloseModal={onCloseModal} />
      </div>
    </div>
  );
};

export default AddProduct;
