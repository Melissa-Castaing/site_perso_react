import { useEffect, useContext } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Hobbies from '../components/Hobbies';
import typewriter from '../contexts/typewriterContext';
import typeWriterData from '../data/typeWriterData.json';

export default function HomePage() {
  const { setSentences } = useContext(typewriter);

  useEffect(() => {
    setSentences(typeWriterData.homepage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Hobbies />
    </div>
  );
}
