import { useEffect, useContext } from 'react';
import typewriter from '../contexts/typewriterContext';
import typeWriterData from '../data/typeWriterData.json';

export default function SkillPage() {
  const { setSentences } = useContext(typewriter);

  useEffect(() => {
    setSentences(typeWriterData.skills);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      pouet
    </div>
  );
}
