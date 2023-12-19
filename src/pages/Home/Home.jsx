import Hero from '../../components/Hero/Hero';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const Home = () => {
  const confused = 'no';
  const myKey = confused;
  
  const obj = {
  [myKey]: false,
  };
  
  console.log(obj);
  return (
    <div className="container ">
      <Hero />
      <CategoriesList title="Категории" />
    </div>
  );
};

export default Home;
