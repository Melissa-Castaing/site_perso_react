import { useEffect, useContext } from 'react';
import Sliders from '../components/Sliders';
import typewriter from '../contexts/typewriterContext';
import typeWriterData from '../data/typeWriterData.json';

export default function CareerPage() {
  const { setSentences } = useContext(typewriter);

  useEffect(() => {
    setSentences(typeWriterData.career);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <Sliders />
    </section>
  );
}
