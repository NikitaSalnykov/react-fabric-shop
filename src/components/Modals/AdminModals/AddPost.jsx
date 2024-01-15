import { AddPostForm } from './AddPostForm';

const AddPost = ({ onCloseModal }) => {
  return (
    <div className=" text-center smOnly:px-3 md:px-5 rounded-3xl">
      <h3 className="text-neutral-900 text-2xl mb-11 font-medium font-['Manrope'] tracking-wide ">
        Добавить статью
      </h3>
      <div className="">
        <AddPostForm onCloseModal={onCloseModal} />
      </div>
    </div>
  );
};

export default AddPost;
