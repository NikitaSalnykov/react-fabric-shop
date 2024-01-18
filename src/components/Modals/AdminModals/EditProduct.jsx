import { EditProductForm } from './EditProductForm';

const EditProduct = ({ onCloseModal, product }) => {
  return (
    <div className="md:max-w-2xl text-center py-12 smOnly:p-3 md:p-6 rounded-3xl  ">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide">
        Редактировать товар
      </h3>
      <div className="">
        <EditProductForm onCloseModal={onCloseModal} product={product} />
      </div>
    </div>
  );
};

export default EditProduct;
