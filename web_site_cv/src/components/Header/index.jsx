import Typewritter from 'typewriter-effect';
import './style.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header_line" />
      <Typewritter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Je suis curieuse, ')
            .pauseFor(1000);
          // .deleteChars(8);
          typewriter.typeString('passionnée')
            .pauseFor(1000)
            .deleteChars(20);
          typewriter.typeString('développeuse full stack junior')
            .pauseFor(3000)
            .deleteChars(10)
            .start();
        }}
      />
      <div className="header_line_under" />
    </div>
  );
}
