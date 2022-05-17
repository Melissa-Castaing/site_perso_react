import { useState } from 'react';
import jv1 from '../../assets/images/hobbies/games.jpg';
import book1 from '../../assets/images/hobbies/manga.jpg';
import music1 from '../../assets/images/hobbies/music.jpg';
import BtnSlider from './BtnSlider';
import './style.scss';

export default function Slider() {
  const jvSlide = [
    {
      id: 1,
      image: jv1,
      alt: 'switch',
    },
    {
      id: 2,
      image: book1,
      alt: 'manga',
    },
    {
      id: 3,
      image: music1,
      alt: 'concert',
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== jvSlide.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === jvSlide.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(jvSlide.length);
    }
  };

  // Here, function witch work with dots selector
  // const moveDot = (index) => {
  //   setSlideIndex(index);
  // };

  return (
    <div className="container-slider">
      {
      jvSlide.map((jv, index) => (
        <div key={jv.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
          <img src={jv.image} alt={jv.alt} />
        </div>
      ))
      }
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="previous" />

      {/* Here, there is code, if we want add dots selector */}
      {/* <div className="container-dots">
        {
          Array.from({ length: 3 }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            />
          ))
        }
      </div> */}
    </div>
  );
}
