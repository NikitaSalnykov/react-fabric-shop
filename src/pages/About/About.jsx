import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Faq from '../../components/Faq/Faq';
import Team from '../../components/Team/Team';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const section = location.state?.section;

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 150,
            behavior: 'smooth',
          });
        }, 100);
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
