import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

function Home() {
  const { hash } = useLocation();

  // When arriving at "/" with a hash (e.g. from the header nav on a
  // project detail page), scroll to that section once it's rendered.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
