export const FullSizeImage = ({ image }) => {
  return (
    <img
      className="h-auto max-w-full rounded-lg"
      src={image}
      alt="fullsize attached image"
    />
  );
};
