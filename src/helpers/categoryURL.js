import { categories } from '../assets/categories';

export const categoryURL = (category) => {
  const result = categories.find((el) => el.name === category);

  if (result) {
    return result.category;
  } else {
    console.log(`Category not found for ${category}`);
  }
};
