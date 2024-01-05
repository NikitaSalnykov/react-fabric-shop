import { categories } from '../assets/categories';

const categoryName = (category) => {
  const result = categories.find((el) => el.category === category);
  if (result) {
    return result.name;
  } else {
    console.log(`Category name not found for ${category}`);
  }
};

export default categoryName;
