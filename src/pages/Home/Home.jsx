import Hero from "../../components/Hero/Hero"
import CategoriesList from "../../components/CategoriesList/CategoriesList";

const Home = () => {
  return (
    <div className="container">
    <Hero/>
    <CategoriesList title='Категории'/>
</div>

  );
};

export default Home;
