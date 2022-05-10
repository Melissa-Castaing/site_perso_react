/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import { createContext, useState } from 'react';

const typewriter = createContext();

export const TypewriterProvider = ({ children }) => {
  const [sentences, setSentences] = useState([]);

  const value = {
    sentences,
    setSentences,
  };

  return (
    <typewriter.Provider value={value}>
      {children}
    </typewriter.Provider>
  );
};

export default typewriter;
