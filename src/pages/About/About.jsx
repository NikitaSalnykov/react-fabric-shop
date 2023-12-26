import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Faq from '../../components/Faq/Faq';
import Team from '../../components/Team/Team';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

  const location = useLocation();
  const section = location.state?.section;
  console.log(section);

  useEffect(() => {
    // Прокрутка к указанному разделу при монтировании компонента
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return (
    <div className="container">
      <Breadcrumbs />
      <Team />
      <Faq />
    </div>
  );
};

export default About;
