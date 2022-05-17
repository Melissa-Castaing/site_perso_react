import { useState } from 'react';
import jv1 from '../../assets/images/hobbies/games.jpg';
import book1 from '../../assets/images/hobbies/manga.jpg';
import music1 from '../../assets/images/hobbies/music.jpg';
import BtnSlider from './BtnSlider';
import './style.scss';

export default function Slider() {
  const [slideIndex, setSlide] = useState(1);

  const nextSlide = () => {

  };

  const prevSlide = () => {

  };

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

  return (
    <div className="container-slider">
      {
      jvSlide.map((jv) => (
        <div key={jv.id} className="slide">
          <img src={jv.image} alt={jv.alt} />
        </div>
      ))
      }
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="previous" />
    </div>
  );
}
