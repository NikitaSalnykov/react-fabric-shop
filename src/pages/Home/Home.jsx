import Hero from '../../components/Hero/Hero';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const Home = () => {
  return (
    <div className="container pt-12">
      <Hero />
      <CategoriesList title="Категории" />
    </div>
  );
};

export default Home;
