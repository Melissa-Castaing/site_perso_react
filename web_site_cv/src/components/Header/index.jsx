import { useContext } from 'react';
import Typewritter from 'typewriter-effect';
import typewriterContext from '../../contexts/typewriterContext';
import './style.scss';

export default function Header() {
  // équivaut à un useSelector
  const { sentences } = useContext(typewriterContext);

  return (
    <div className="header">
      <div className="header_line" />
      <Typewritter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          sentences.forEach((sentence) => {
            typewriter.typeString(sentence.text);
            if (sentence.pause) typewriter.pauseFor(sentence.pause);
            if (sentence.delete) typewriter.deleteChars(sentence.delete);
            if (sentence.deleteAll) typewriter.deleteAll();
          });
          typewriter.start();
          // typewriter.typeString('Je suis curieuse, ')
          //   .pauseFor(1000);
          // // .deleteChars(8);
          // typewriter.typeString('passionnée.')
          //   .pauseFor(1000)
          //   .deleteChars(21);
          // typewriter.typeString('développeuse full stack JS junior')
          //   .pauseFor(3000)
          //   .deleteChars(10)
          //   .start();
        }}
      />
      <div className="header_line_under" />
    </div>
  );
}
